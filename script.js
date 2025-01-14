const sb = document.getElementById('sb');
const link = document.getElementById('link');
let urlbox = document.getElementById('urlbox');
let colorValue = JSON.parse(localStorage.getItem("colorvalue"));
let usehttp = JSON.parse(localStorage.getItem("usehttp"));



if (usehttp == null){
    usehttp = false;
    localStorage.setItem("usehttp",JSON.stringify(false));
}
function go(){
    if(urlbox.value.startsWith("http") == false){
        if (usehttp){
            urlbox.value = "http://"+urlbox.value;
            link.href = urlbox.value;
        }else{
            urlbox.value = "https://"+urlbox.value;
            link.href = urlbox.value;
        }
    }else {
        link.href = urlbox.value;
        
    }
}
urlbox.addEventListener("keypress",function (event){
    if (event.key == "Enter"){
        if(urlbox.value.startsWith("http") == false){
            if (usehttp){
                urlbox.value = "http://"+urlbox.value;
                link.href = urlbox.value;
                sb.click()
            }else{
                urlbox.value = "https://"+urlbox.value;
                link.href = urlbox.value;
                sb.click()
            }
        }else {
            link.href = urlbox.value;
            sb.click()
        }
    }
})
body.style.backgroundColor = colorValue;
if  (colorValue == null){
    colorValue = "#000000";
}

sb.onclick = go;