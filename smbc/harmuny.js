var $doc           = jQuery(document),
    $window        = jQuery(window),
    $body          = jQuery('body'),
    is_RTL         = jamal.is_rtl ? true : false,
    isDuringAjax   = false,
    $site          = jQuery('.site');

$doc.ready(function() {

    "use strict";

    // Debugging
    performance.mark('HarmunyStart');
    jQuery('body.offcanvas-active, body.shopcanvas-active').css('height', '100vh').css('overflow-y', 'hidden');

    harmunyJsAnmi( $site );

    /**
     * Load More Button for archives
     **/
    $doc.on( 'click', '#jamal-load-more .jamal-load-more-btn-inner', function(){
        if( isDuringAjax === false ){
            isDuringAjax = true;
            harmuny_ajax_archives();
        }
    });

    /**
     * Infinite Scroll for archives
     **/
    var $infiniteScrollArchives = jQuery('#jamal-infinite-scroll .jamal-load-more-btn-inner');
    if( $infiniteScrollArchives.length ){
        $infiniteScrollArchives.viewportChecker({
            repeat: true,
            offset: 60,
            callbackFunction: function(){
                if( isDuringAjax === false ){
                    isDuringAjax = true;
                    harmuny_ajax_archives();
                }
            }
        });
    }

    var stickySidebarTop = 0;
    if ( $window.width() > 991 ) {
        if ( $body.hasClass( 'is-sticky-nav' ) ) {
            var bd_nav          = jQuery('.sticky-nav-holder');
            var bd_wpadminbar   = jQuery('#wpadminbar');

            if ( bd_wpadminbar.length ) {
                stickySidebarTop = 32;
            }
            else {
                stickySidebarTop = 0;
            }

            var bd_above_Height = jQuery('#masthead').outerHeight();

            $window.scroll(function () {
                if ( $window.scrollTop() > bd_above_Height) {
                    bd_nav.addClass('sticky-nav').css('top', stickySidebarTop );
                }
                else {
                    bd_nav.removeClass('sticky-nav').css('top', '0');
                }
            } );

        }
    }

    // Open Share buttons in a popup
    $doc.on('click', '.ja-list-share a', function(event){
        event.preventDefault();
        var link = jQuery(this).attr('href');
        if( link != '#' ){
            window.open( link, 'js_share', 'height=450,width=760,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0' );
            return false;
        }
    } );


    var $post_inner = jQuery('.jamal-post-container .entry');

    if ( jamal.reading_indicator && $post_inner.length )
    {
        var content_height  = $post_inner.height(),
            window_height   = $window.height();

        $window.scroll(function()
        {
            var percent        = 0,
                content_offset = $post_inner.offset().top,
                window_offest  = $window.scrollTop();

            if (window_offest > content_offset){
                percent = 100 * (window_offest - content_offset) / (content_height - window_height);
            }

            jQuery('#reading-position-indicator').css('width', percent + '%');
        } );
    }


    // Post
    var ja_post = jQuery('article.jamal-post-container');
    harmunyShareIcons(ja_post);

    // Scroll To
    var ja_go_top = jQuery('.jamal-back-to-top');

    $window.on( 'scroll', function(){
        if ( jQuery( this ).scrollTop() > 100 ){
            ja_go_top.css( { bottom: "15px", transform: "rotate(0deg)" } );
        }
        else {
            ja_go_top.css( { bottom: "-43px", transform: "rotate(180deg)" } );
        }
    });

    ja_go_top.on( 'click', function(event) {

        event.preventDefault();

        jQuery('html, body').animate( { scrollTop: 0 }, 'slow' );

        return false;
    } );


    // autocomplete off
    jQuery('form.mc4wp-form').find('input[type="email"]').attr("autocomplete", "off");
    jQuery('.search-form').find('.search-field').attr("autocomplete", "off");

    /**
     * OffCanvas Menu
     */
    jQuery.fn.responsiveNav = function() {

        this.removeClass( 'menu-item-expanded' );

        if ( this.prev().hasClass( 'submenu-visible' ) ) {
            this.prev().removeClass( 'submenu-visible' ).slideUp();
            this.parent().removeClass( 'menu-item-expanded' );
        }

        else {
            this.parent().parent().find( '.menu-item .sub-menu' ).removeClass( 'submenu-visible' ).slideUp();
            this.parent().parent().find( '.menu-item-expanded' ).removeClass( 'menu-item-expanded' );
            this.prev().toggleClass( 'submenu-visible' ).hide().slideToggle();
            this.parent().toggleClass( 'menu-item-expanded' );
        }
    };

    jQuery( '.widget_nav_menu .menu-item-has-children' ).each( function( e ) {

        jQuery( this ).append( '<span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="896" height="1024" viewBox="0 0 896 1024"> <path d="M414.058 762.952l-388.686-388.688c-18.746-18.746-18.746-49.138 0-67.882l45.334-45.334c18.714-18.714 49.044-18.75 67.802-0.080l309.492 308.042 309.49-308.042c18.758-18.67 49.088-18.634 67.802 0.080l45.334 45.334c18.746 18.746 18.746 49.138 0 67.882l-388.684 388.688c-18.746 18.744-49.138 18.744-67.884 0z"></path> </svg></span>' );

        jQuery( '> span', this ).on( 'click', function( e ) {
            e.preventDefault();
            jQuery( this ).responsiveNav();
        } );

        if ( '#' === jQuery( '> a', this ).attr( 'href' ) ) {
            jQuery( '> a', this ).on( 'click', function( e ) {
                e.preventDefault();
                jQuery( this ).next().next().responsiveNav();
            } );
        }

    } );


    /**
     * OffCanvas
     */
    jQuery( '.toggle-offcanvas, .close-toggle-offcanvas, .offcanvas-close' ).on( 'click', function(e){

        e.preventDefault();

        harmunyJsAnmi( jQuery('.offcanvas') );

        if( !$body.hasClass( 'offcanvas-active' ) ){
            $body.addClass( 'offcanvas-transition' );
        }
        else {
            setTimeout( function() {
                $body.removeClass( 'offcanvas-transition' );
            }, 400 );
        }

        $body.toggleClass( 'offcanvas-active' );
    } );



    jQuery( '.shopping-cart-icon, .close-toggle-shopcanvas, .shopcanvas-close' ).on( 'click', function(e){

        e.preventDefault();

        harmunyJsAnmi( jQuery('.shopcanvas') );

        if( !$body.hasClass( 'shopcanvas-active' ) ){
            $body.addClass( 'shopcanvas-transition' );
        }
        else {
            setTimeout( function() {
                $body.removeClass( 'shopcanvas-transition' );
            }, 400 );
        }

        $body.toggleClass( 'shopcanvas-active' );
    } );




    jQuery( '.on-search-overlay .search-icon, .on-search-overlay .search-icon-close' ).on( 'click', function(e){

        e.preventDefault();

        $body.toggleClass( 'on-search-overlay-active' );
    } );




    var siteSearchId = jQuery('#site-search');

    jQuery( '.on-search-slide .search-icon, .on-search-slide .search-close' ).on( 'click', function(e){

        e.preventDefault();

        jQuery( '#site-search .search-form-wrap' ).focusout();

        if( !siteSearchId.hasClass( 'search-open' ) ){
        }
        else {
            setTimeout( function() {
            }, 400 );
        }

        siteSearchId.toggleClass( 'search-open' );

        siteSearchId.find('.search-field').attr("autocomplete", "off");

    } );

    $doc.on('keydown', function(e){
        if( e.which == 27 ){
        }
    });


    /**
     * Custom Scrollbar
     */
    jQuery('.has-custom-scroll').each(function(){

        var thisElement   = jQuery(this),
            scroll_height = thisElement.data('height')  ? thisElement.data('height')  : 'auto',
            data_padding  = thisElement.data('padding') ? thisElement.data('padding') : 0;

        thisElement.mCustomScrollbar('destroy');

        if ( thisElement.data('height') == 'window' ){
            var thisHeight   = thisElement.height(),
                windowHeight = $window.height() - data_padding - 50;

            scroll_height = ( thisHeight < windowHeight ) ? thisHeight : windowHeight;
        }

        thisElement.mCustomScrollbar({
            scrollButtons     : { enable: false },
            autoHideScrollbar : thisElement.hasClass('show-scroll') ? false : true,
            scrollInertia     : 100,
            mouseWheel        : {
                enable          : true,
                scrollAmount    : 60
            },
            set_height        : scroll_height,
            advanced          : { updateOnContentResize: true },
            callbacks:{
                whileScrolling:function(){
                    harmunyJsAnmi( thisElement );
                }
            }
        });
    });

    // Debugging
    performance.mark('HarmunyEnd');
    performance.measure( 'Harmuny Custom JS', 'HarmunyStart', 'HarmunyEnd' );
} );

function harmuny_ajax_archives(){

    // Page Layout
    if( jQuery('#masonry-grid').length ){
        var theBlock = jQuery('#masonry-grid');
        var is_masonry = true;
    }
    else{
        var is_masonry = false;
        var theBlock = jQuery('.ja-posts-container');
    }

    var button = jQuery('.jamal-load-more-btn-inner'),
        theQuery        = button.attr('data-query'),
        max_page        = button.attr('data-max_page'),
        current_page    = parseInt( button.attr('data-page') ) + 1,
        pages_count     = button.attr('data-pages_count'),
        found_posts     = button.attr('data-found_posts'),
        latest_post     = button.attr('data-latest'),
        posts           = button.attr('data-posts');

    jQuery.ajax({ // you can also use $.post here
        type: 'post',
        url: jamal.ajaxurl, // AJAX handler
        //data: data,
        data: {
            action      : 'jamaLoadMore',
            query       : theQuery,
            max         : max_page,
            page        : current_page,
            pages_count : pages_count,
            found_posts : found_posts,
            latest_post : latest_post,
            layout      : jamal.the_layout,
        },

        beforeSend: function (xhr) {
            button.html('<div class="ja-loading ja-loading-small"></div>'); // change the button text, you can also add a preloader image
        },

        success: function (data) {

            if ( data.trim() !="" ) {

                button.html( jamal.load_more_text );

                var content = jQuery(data);

                content.each(function(idx, item){

                    if ( jQuery().mediaelementplayer ) {
                        jQuery(this).find('.wp-audio-shortcode, .wp-video-shortcode').mediaelementplayer();
                    }

                    if( jQuery.fn.slick ) {
                        var slickSlider = jQuery(this).find('.slider-in-widget');
                        harmuny_get_slider(slickSlider);
                    }

                    var ja_postd = jQuery(this).attr('id');

                    if ( ja_postd === undefined || ja_postd === null ) {
                    }
                    else {
                        //console.log(ja_postd);
                        harmunyShareIconsTwo(ja_postd);
                    }
                } );

                if( is_masonry ){

                    if( jQuery.fn.masonry ) {
                        theBlock.append( content ).masonry( 'appended', content );
                        isDuringAjax = false;

                        // Load images and re fire masonry
                        theBlock.imagesLoaded().progress( function(){
                            theBlock.masonry('layout');
                        });
                    }
                }
                else{
                    theBlock.append(content);
                    isDuringAjax = false;
                }

                //current_page++;

                if ( current_page == max_page ) {
                    button.remove(); // if last page, remove the button
                }
            }
            else {
                button.remove(); // if no data, remove the button as well
            }

            harmunyJsAnmi(theBlock);
        }
    } );

    // Change the next page number
    button.attr( 'data-page', current_page );

    return false;
}

function harmunyShareIconsTwo($ja_post) {

    var this_post       = jQuery('#'+$ja_post),
        meta_share      = this_post.find('.ja-meta-list-share'),
        content_share   = this_post.find('.ja-content-list-share');

    if ( this_post.length){
        this_post.each(function (idx, item) {

            $doc.on('click', '#'+ $ja_post +' span.ja-meta-share', function(event) {
                event.preventDefault();
                meta_share.toggleClass("active");
                jQuery(this).toggleClass("active");
            });

            $doc.on('click', '#'+ $ja_post +' span.ja-content-share', function(event) {
                event.preventDefault();
                content_share.toggleClass("active");
                jQuery(this).toggleClass("active");
            });

        } );
    }

}

function harmunyShareIcons($ja_post){
    if ( $ja_post.length){
        $ja_post.each(function (idx, item){
            var post_i          = 'post-' + idx,
                this_post       = jQuery(this),
                post_id         = this_post.get(0).id,
                post_at_id      = this_post.attr('id'),
                meta_share      = this_post.find('.ja-meta-list-share'),
                content_share   = this_post.find('.ja-content-list-share');

            jQuery('#'+ post_id +' span.ja-meta-share').on('click', function(event) {
                event.preventDefault();
                meta_share.toggleClass("active");
                jQuery(this).toggleClass("active");
            });

            jQuery('#'+ post_id +' span.ja-content-share').on('click', function(event) {
                event.preventDefault();
                content_share.toggleClass("active");
                jQuery(this).toggleClass("active");
            });
        });
    }
}

function harmunyJsAnmi($ja){
    if( jamal.lazyload )
    {
        $ja.find( '[data-src]' ).each(function()
        {
            var elem = jQuery(this);
            elem.attr('src', elem.data('src') );
            elem.removeAttr('data-src');
        } );

        $ja.find( '[data-lazy-bg]' ).each(function()
        {
            var elem = jQuery(this);
            elem.attr('style', 'background-image:url(' + elem.data('lazy-bg') + ')' );
            elem.removeAttr('data-lazy-bg');
        } );
    }
}

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});