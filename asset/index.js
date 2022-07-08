numberOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrum; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var ButtonInnerHTML = this.innerHTML;
        switch (ButtonInnerHTML) {
            case "w":
                var tom1 = new Audio("/asset/sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("/asset/sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("/asset/sounds/tom-3.mp3")
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("/asset/sounds/tom-4.mp3")
                tom4.play();
                break;

            case "j":
                var snare = new Audio("/asset/sounds/snare.mp3")
                snare.play();
                break;

            case "k":
                var crash = new Audio("/asset/sounds/crash.mp3")
                crash.play();
                break;

            case "l":
                var kickBase = new Audio("/asset/sounds/kick-bass.mp3")
                kickBase.play();


            default:
                console.log(ButtonInnerHTML);
                break;
        }



    })
}