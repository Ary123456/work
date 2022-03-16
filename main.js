function startToclassify() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    Classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Y645G-3p4/model.json", modelReady);
}
function modelReady() {
    Classifier.classify(gotResults);
}
var barking = 0;
var meowing = 0;
var elephant = 0;
var hiss = 0;
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = "I can hear: " + results[0].label;
        document.getElementById("result_count").innerHTML = "Dog: " + barking + "Cat: "+meowing+"Elephant: "+elephant+"Hiss:"+hiss+;
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_count").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        img = document.getElementById("imaGe");
        if (results[0].label == "barking") {
            img.src = "DOG.jpg";
            barking = barking + 1;
        } else if (results[0].label == "meowing") {
            img.src = "CAT.jpg";
            meowing = meowing + 1;
        } else if (results[0].label == "elephant") {
            img.src = "ELEPHANT.jpg";
            elephant = elephant + 1;
        } else if (results[0].label == "snake") {
            img.src = "SNAKE.jpg"
            snake = snake + 1;
        }else{
            img.src = "EAR2.gif"
        }
