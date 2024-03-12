console.log("loaded");

document.querySelector("#overview-tile").addEventListener("click",(event) => {
   
    const element = document.querySelector(".overview");
    element.style.transform = "visibility(visible)";
    if (element.style.maxHeight){
        element.style.maxHeight = "";
        document.querySelector("overview").style.transform = "color(#1f8aa2)";
    }
    else{
        element.style.maxHeight= "2000px";
        document.querySelector(".overview").style.transform = "color(#d6476b)";
    }
})