const fishesInfo = document.getElementById("more-info-button");
const fihsesDisplay = document.getElementById("infoFish")
const allTheFishes = document.getElementById("peces")
const someFishes = document.getElementById("pecesVarios")
const introScreen = document.getElementById("game-intro-screen")
const bicudaImage = document.getElementById("bicudaPose")
const bicudaSection = document.getElementById("bbicuda")
const bicudaTxt = document.getElementById("bicudaText")
const button = document.getElementsByTagName("button")
const next = document.getElementById("next-button")
const fishTxt = document.getElementById("fishesText")

fishesInfo.addEventListener("click", showFishesInfo)

    function showFishesInfo () {
        allTheFishes.style.display = "none"

        introScreen.remove();

        fihsesDisplay.style.display = "flex"
        fihsesDisplay.style.flexDirection = "column"
        fihsesDisplay.style.flexWrap = "wrap"
        fihsesDisplay.style.alignContent = "center";
        fihsesDisplay.style.alignItems = "center";
        fihsesDisplay.style.justifyContent = "center";
        fihsesDisplay.style.backgroundColor = "antiquewhite"

        bicudaImage.style.display = "flex";
        bicudaImage.style.width = `${40}%`;
        bicudaImage.style.flexWrap = "wrap";
        bicudaImage.style.flexDirection = "column";
        bicudaImage.style.alignContent = "center";
        bicudaImage.style.justifyContent = "center";
        bicudaImage.style.alignItems = "center";

        bicudaSection.style.display = "flex"
        bicudaSection.style.flexDirection = "column";
        bicudaSection.style.justifyContent = "center";
        bicudaSection.style.alignItems = "center";
        bicudaSection.style.alignContent = "center";
        bicudaSection.style.flexWrap = "wrap";

        bicudaTxt.style.textAlign = "justify";
        bicudaTxt.style.margin = `0 ${15}% 0 ${15}%`

    }

next.addEventListener("click", nextPageFishesInfo)

function nextPageFishesInfo (){
    bicudaSection.remove()

    allTheFishes.style.display = "flex"
    allTheFishes.style.flexDirection = "column";
    allTheFishes.style.justifyContent = "center";
    allTheFishes.style.alignItems = "center";
    allTheFishes.style.alignContent = "center";
    allTheFishes.style.flexWrap = "wrap";

    someFishes.style.display = "flex";
    someFishes.style.width = `${75}%`;
    someFishes.style.flexWrap = "wrap";
    someFishes.style.flexDirection = "column";
    someFishes.style.alignContent = "center";
    someFishes.style.justifyContent = "center";
    someFishes.style.alignItems = "center";

    fishTxt.style.textAlign = "justify";
    fishTxt.style.margin = `0 ${15}% 0 ${15}%`
}


        
    

        
       

