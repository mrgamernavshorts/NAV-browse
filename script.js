const sb = document.getElementById('sb');
const link = document.getElementById('link');
let urlbox = document.getElementById('urlbox');
function go(){
    if(urlbox.value.startsWith("http") == false){
        urlbox.value = "https://"+urlbox.value;
        link.href = urlbox.value;
    }else {
        link.href = urlbox.value;
    }
}
sb.onclick = go;