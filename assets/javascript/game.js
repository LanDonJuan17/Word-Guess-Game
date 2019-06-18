window.onload() {

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
        "comet"
    ];
    document.getElementById("wordGuess").innerHtml = words.toString();
    document.getElementById("wordGuess").innerHTML = words[Math.floor(Math.random() * words.length)]
}
var answersArray = [];
for (var i = 0; i < word.length; i++) {
    answersArray[i] = "_";
}
var keyPressed = function () {
    document.getElementById("keyPressed");
    letters = document.createElement("ul");
    for (var i = 0; i < answersArray.length; i++) {
        letters.id = "answersArray";
        list = document.createElement("li");
        list.id = "letter"
        list.innerHTML = answersArray[i];
        check();
        keyPressed.appendChild(letters);
        letters.appendChild(list);
    }
}
var words = words[Math.floor(Math.random() * words.length)];


}

var guess = document.onkeypress(function (keyPressed) {
    wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");




})

var showLives = document.getElementById("lives");

