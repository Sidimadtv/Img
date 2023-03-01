
/*
	Onload
*/

window.onload = function() {

	var word; // Selected word
	var hint; // Selected hint 
	var geuss; // geuss
	var geusses = []; // Stored geusses
	var space; // Number of spaces in word '-'
	var block;
	var copyword, fword, action="";
	var counter = 0, lives, score;
	var geussed = [];
	
	var GIVEN_LIVES = 4;
	$( "#dialog" ).hide();
	
	// Table of unicode order used for the keyboard control and accepted by the game [1568-1594] [1561-1610] 
	var unicodeTable = ["ء","آ","أ","ؤ","إ","ئ","ا","ب","ة","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ", "","","","","","ـ", "ف", "ق","ك","ل","م","ن","ه","و","ى","ي", '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	var alphabet = ['أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و','ي', 'ؤ', 'ئ', 'إ', 'ا', 'ء' ,'ى', 'آ', 'ة'];
	var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	

	// remove space 
	// remove duplicated letters
	function noDups( s ) {
	  var chars = {}, rv = '';
	  for (var i = 0; i < s.length; ++i) {
	    if (!(s[i] in chars) && s[i]!=" ") {
	      chars[s[i]] = 1;
	      rv += s[i];
	    }
	  }
	  return rv;
	}


	// create alphabet ul
	function getButtons(word) {
		var bword = noDups(word);
		// if numbers ?
		if ((word[0] in numbers)) 
		{
			  //alert("numbers");
			  var numbOfButtons = 7-bword.length;
				for(var i = 0; i < numbOfButtons; i++){
					var alpha = numbers[Math.floor(Math.random() * numbers.length)];
					if(bword.indexOf(alpha) > -1)
						i -= 1; 
					else
						bword += alpha;
				}
			  console.log("numbers");
		}
		//if letters
		else
		{
			var numbOfButtons = 14-bword.length;
			for(var i = 0; i < numbOfButtons; i++){
				var alpha = alphabet[Math.floor(Math.random() * alphabet.length)];
				if(bword.indexOf(alpha) > -1)
					i -= 1; 
				else
					bword += alpha;
			}
		}
		
		bword = bword.split('').sort(function(){return 0.5-Math.random()});
		 
		 myButtons = document.getElementById('buttons');
		 myButtons.appendChild(document.createElement('hr'));
		 letters = document.createElement('ul');
		
		for (var i = 0; i < bword.length; i++) {
			letters.id = 'alphabet';
			list = document.createElement('li');
			list.id = 'letter';
			list.className = "letter";
			list.innerHTML = bword[i];
			check();
			myButtons.appendChild(letters);
			letters.appendChild(list);
		}
	}
	
	// Create geusses ul
	var result = function() {
		var wordHolder = document.getElementById('hold');
		var correct = document.createElement('ul');
	
		for (var i = 0; i < word.length; i++) {
			correct.setAttribute('id', 'my-word');
			geuss = document.createElement('li');
			geuss.setAttribute('class', 'geuss');
			if (word[i] === " ") {
				geuss.innerHTML = "&nbsp;&nbsp;";
				space = space + 1;
			}
			else {
				geuss.innerHTML = "_";
			}
	
			geusses.push(geuss);
			wordHolder.appendChild(correct);
			correct.appendChild(geuss);
		}
	}

	/**
	 *	Helper functions
	 **/
	
	comments = function(){
		var activcounter = ''
		if(document.getElementById("yescounter").checked)
		{
			$("#result").html(" في يدك " + lives + " فرص" + " | نقاطك  : " + score);
		}
		else
		{
			$("#result").html(" تم إلغاء الحاسب | نقاطك  : " + score);
		}
	    var link = '<a target="_blank" href="'+decodeURIComponent("https://www.google.com/?q=")+word+'">' + word + "</a>";
	
		if (lives < 1) {
			$("#result").html('انتهت فرصك - الجواب : <span class="ctg">' + link + '</span>');
			$('#bipf').trigger('play');
			score = 0;
			block = true;
		}
		
	    for (var i = 0; i < geusses.length; i++) {
	      if (counter + space === geusses.length) {
	        $("#result").html('أحسنت ! الجواب : <span class="ctg">'+link+'</span>');
	        $('#bipt').trigger('play');
	        if(geusses.length == i + 1){
		        score++;
		        block = true;
	        }
	      }
	    }
	   
	}
	
	checkLetter = function() {
		
		
		$('#bip').trigger('play');
		
		
		
		for (var i = 0; i < word.length; i++) {
			if ( (word[i] === geuss) ) {
				geusses[i].innerHTML = geuss;
				counter += 1;
			
			}
		}
		
		//JSON.stringify("ed : "+geussed);
		
		//console.info("ed : "+geussed);
		
		var j = (word.indexOf(geuss));
		if (j === -1) 
		{
			if(document.getElementById("yescounter").checked)
			{
				lives -= 1;
			}
		}
		comments();
	}
	
	
	
	/**
	 *	Two input ways : Click/Keypress
	 **/
	
	// OnClick Function
	check = function() {
		list.onclick = function() {
			if(!block){
				geuss = (this.innerHTML);
				this.setAttribute("class", "active");
				this.onclick = null;
				checkLetter();
			}
		}
	}
	
	// On keypress 
	$(document).on("keypress", function (e) {
		var codek = e.which;
		if(!block){
			if(codek>1568 && codek<1611){
				geuss = unicodeTable[codek-1569];
				console.log("Keyboard input : "+ codek+" - "+geuss);
				var geussedLetter = $("#alphabet .letter:contains('"+geuss+"')");
				if(geussedLetter.length > 0){
					geussedLetter.attr({"class": "active"});
					geussedLetter.off('click');
					checkLetter();
				}
				
			}
		}
	});
	
	
	/*
		Loading Data
	*/
    
	/**
	 * Shuffles array in place.
	 * @param {Array} a items The array containing the items.
	 */
	
	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	    return a;
	}

	getCombo = function() {
		var chosenData = data[Math.floor(Math.random() * data.length)];
		
		//chosenTags = shuffle(chosenData[1]);
		chosenTags = chosenData[1];

		key = chosenData[0][Math.floor(Math.random() * chosenData[0].length)];
		tag0 = chosenTags[0][Math.floor(Math.random() * chosenTags[1].length)];
		tag1 = chosenTags[1][Math.floor(Math.random() * chosenTags[1].length)];
		/*tag2 = chosenTags[2][Math.floor(Math.random() * chosenTags[2].length)];*/

		return [key, tag0, tag1];	
	}
	
	/*
		Play - reset - hint Functions
	*/
	
	// Erease
	function erease(){
		$("#tags").empty();
		$("#hold").empty();
		$("#buttons").empty();
	}

	// Play Function
	play = function() {
		var combo = getCombo();
		word =  combo[0];
		$("#tags").text(combo[1]+" : ");
		$("#dialog").text(combo[2]);
		getButtons(word);
		lives = GIVEN_LIVES;
		geusses = [];
		geusses = [];
		space = 0;
		counter = 0;
		block = false;
		result();
		comments();
	}
	getHelp= function()
	{
		var combo = getCombo();
		hint =  combo[2];
	}
	// OnClick Play
	document.getElementById('play').onclick = function() {
		/*if(block){*/
			erease();
			play();
		/*}*/
	}
	
	// OnClick Reset
	document.getElementById('reset').onclick = function() {
		score = 0;
		erease();
		play();
	}
	// OnClick help
	$('#help').click( function()
	{
	$( "#dialog" ).toggle();	
	});
	
	
	score = 0;
	play();
	

}
/*document.getElementById('help').onclick = function() {
		//alert(hint);
		document.getElementById('dialog').toggle();
	}*/
