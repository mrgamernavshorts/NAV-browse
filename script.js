const sb = document.getElementById('sb');
const link = document.getElementById('link');
let urlbox = document.getElementById('urlbox');
let mode = JSON.parse(localStorage.getItem("mode"));
console.log(mode);

if (mode == null) {
    mode = false;
}
if (mode === true) {
    body.style.backgroundColor = "white";
    urlbox.style.backgroundColor = "white";
    urlbox.style.borderColor = "black";
    sb.style.borderColor = "black";
}else{
    body.style.backgroundColor = "black";
    urlbox.style.backgroundColor = "black";
    urlbox.style.borderColor = "white";
    sb.style.borderColor = "white";
}

function go(){
    if(urlbox.value.startsWith("http") == false){
        urlbox.value = "https://"+urlbox.value;
        link.href = urlbox.value;
    }else {
        link.href = urlbox.value;
    }
}
sb.onclick = go;