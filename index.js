

/*document.querySelector("button").addEventListener("click",handleClick);
function handleClick(){
    alert("I got clicked");
}
}*/

//FOR LOOP
//button press
var numOfButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i < numOfButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
}
//keyboard press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key){
    switch(key){
        case("w"):
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case("a"):
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case("s"):
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
        case("d"):
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
        case("j"):
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
        case("k"):
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
        case("l"):
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
        default:
            console.log(buttonInnerHtml);
    }
}
/*function buttonAnimation(currentkey){
    var activeButton = document.querySelectorAll("." + currentkey);
    activeButton.classList.add(".pressed");
    setTimeout(function(){

        activeButton.classList.remove(".pressed");
    },100);
}*/
/**/
/*While Loop
var numOfButtons = document.querySelectorAll(".drum").length;
var i = 0;
while(i < numOfButtons){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        alert("I got clicked!!!")});
        i++;
    }*/
