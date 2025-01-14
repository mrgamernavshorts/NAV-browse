const backb = document.getElementById('backb');
const body = document.getElementById('body');
const customColorBox = document.getElementById('coustomcolorbox');
const customColorDiv = document.getElementById('colorpicker');
let color1 = document.getElementById('color1');
let colorValue = JSON.parse(localStorage.getItem("colorvalue"));
let coustomcoloron = JSON.parse(localStorage.getItem("coustomcoloron"));
let usehttp = JSON.parse(localStorage.getItem("usehttp"));
const usehttpbox = document.getElementById('usehttpbox')

color1.value = colorValue;
body.style.backgroundColor = colorValue;


if (usehttp == null){
    usehttp = false;
    localStorage.setItem("usehttp",JSON.stringify(false));
}
if (usehttp == false){
    usehttpbox.checked = false;
}else{
    usehttpbox.checked = true;
}
if  (colorValue == null){
    colorValue = "#000000";
}

if (coustomcoloron) {
    customColorBox.checked = true;
    customColorDiv.style.display = "block";
}else{
    customColorBox.checked = false;
    customColorDiv.style.display = "none";
}


function closeWin() {
    window.close();
}

function showCustomColor() {
    if (!customColorBox.checked) {
        customColorDiv.style.display = "none";
        colorValue = "#000000";
        localStorage.setItem("colorvalue",JSON.stringify(colorValue))
        body.style.backgroundColor = "black";
        localStorage.setItem("coustomcoloron",JSON.stringify(false))
    } else {
        customColorDiv.style.display = "block";
        localStorage.setItem("coustomcoloron",JSON.stringify(true))
    }
}

function usehttpon(){
    if (!usehttpbox.checked){
        usehttpbox.checked = false;
        localStorage.setItem("usehttp",JSON.stringify(false));
    }else{
        usehttpbox.checked = true;
        localStorage.setItem("usehttp",JSON.stringify(true));
    }
}

function saveCustomColor() {
    if (customColorBox.checked) {
        colorValue = color1.value;
        console.log("Custom color set:", colorValue);
        localStorage.setItem("colorvalue", JSON.stringify(colorValue));
        body.style.backgroundColor = colorValue;
    } else {
        localStorage.setItem("colorvalue", JSON.stringify(null));
    }
}
backb.onclick = closeWin;
customColorBox.onclick = showCustomColor;
color1.oninput = saveCustomColor;
usehttpbox.onclick = usehttpon;