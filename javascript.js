const lightbulbSwitch = document.querySelector('#Lightbulb-switch');
const lightbulbImage = document.querySelector('#Lightbulb-image');
console.log(lightbulbImage)

let isLightbulbOn = false;

lightbulbSwitch.addEventListener('click', function() {
    if (isLightbulbOn) {
       lightbulbImage.src = 'off.png'
       isLightbulbOn = false;
    } else {
       lightbulbImage.src = 'on.png'
       isLightbulbOn = true;
    }
    console.log(isLightbulbOn)
})