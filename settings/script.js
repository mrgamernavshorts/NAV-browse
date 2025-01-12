const backb = document.getElementById('backb');
const body = document.getElementById('body');
const modecheckbox = document.getElementById('modecheckbox');

let mode = JSON.parse(localStorage.getItem("mode"));
console.log(mode);

if (mode == null) {
    mode = false;
}

function changemode() {
    if (modecheckbox.checked) {
        localStorage.setItem("mode", JSON.stringify(true));
        console.log("mode set true");
        body.style.backgroundColor = "white";
    } else {
        localStorage.setItem("mode", JSON.stringify(false));
        body.style.backgroundColor = "black";
    }
}


if (mode === true) {
    modecheckbox.checked = true;
    body.style.backgroundColor = "white";
} else {
    modecheckbox.checked = false;
    body.style.backgroundColor = "black";
}

function closewin() {
    window.close();
}

modecheckbox.onclick = changemode;
backb.onclick = closewin;
