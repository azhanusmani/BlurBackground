const loadText = document.querySelector(".loadingImage")
const blurry = document.querySelector(".background")
 
let load = 0;

let int = setInterval(blurring,50)

function blurring(){
    load++


    if(load>99){
        clearInterval(int)
    }
 
loadText.innerText=`${load}%`
loadText.style.opacity= scale(load,0,100,0.9,0 ) 
 blurry.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`
}


function scale  (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}