

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
var compWord = words[Math.floor(Math.random() * words.length)];

var answer = [];
for (var i = 0; i < compWord.length; i++) {
    answer.push("_");
}

