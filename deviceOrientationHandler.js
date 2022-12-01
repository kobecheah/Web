function updateRotateDeviceCanvas(display) {
    document.getElementById('treasure-hunt-landscape-overlay').style.display = display ? 'flex' : 'none';
    document.getElementById('treasure-hunt-content').style.display = display ? 'none' : 'block';
}
function appendRotateDeviceCanvas() {
    var str = '<link rel="stylesheet" href="./style.css" /><div id="treasure-hunt-landscape-overlay" style="display: flex"><p>Please rotate your phone to Potrait Mode</p><img src="./images/RotatePhone.png" /></div>';
    document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", str);
}

appendRotateDeviceCanvas();

let matchMediaQuery = "(orientation: landscape)";
let landscape = window.matchMedia(matchMediaQuery);

checkOrientation(landscape.matches);

landscape.addEventListener("change", function (e) {
    checkOrientation(e.matches);
});

function checkOrientation(display) {
    if (display) {
        if (screen.availWidth > screen.availHeight) {
            updateRotateDeviceCanvas(true);
        }
    }
    else {
        updateRotateDeviceCanvas(false);
    }
}