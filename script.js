let number = Math.floor(Math.random() * 10) + 1;

function check() {
    let guess = document.getElementById("guess").value;

    if (guess == number) {
        document.getElementById("result").innerHTML =
        "Correct! You Won!!!";
    }
    else if (guess > number) {
        document.getElementById("result").innerHTML =
        "Too High! Try Again";
    }
    else {
        document.getElementById("result").innerHTML =
        "Too Low! Try Again";
    }
}