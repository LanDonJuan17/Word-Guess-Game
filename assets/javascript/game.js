(function () {
    var chooseWord = function () {
        var words = [
            "galaxy",
            "asteroid",
            "stars",
            "planet",
            "sun",
            "moon",
            "universe",
            "supernova",
            "blackhole",
            "comet"];

        var wordChoice = words[Math.floor(Math.random() * words.length)];
        document.getElementById("chosenWord").innerHTML =
            wordChoice;


        var wordSpaces = wordChoice.length;
        for (var i = 0; i < wordlength; i++) {
            wordChoice = [wordChoice.slice(0, i * 2 + 1), ' ', wordChoice.slice(i * 2 + 1)].join('');
        }
        var letters = "_";
        var wordLength = wordChoice.length;

        for (i = 0; i < wordLength; i++) {
            var x = wordChoice.charAt(i);
        }

        if (x === "" || x === "/'") {
            blanks += x;
        }
        else {
            blanks += "_";
        }
    }
    document.getElementById("blanks").innerHTML = blanks;
});

document.onkeypress = function (keyPressed) {
    var keyPressed = keyPressed || window.event,
        charCode = keyPressed.keyCode || keyPressed.which,
        userGuess = String.fromCharCode(charCode);
    result = function () {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');
        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }
    var userGuess = keyPressed
    document.getElementById("userGuess").innerHTML += userGuess;
    document.getElementById("")

};
