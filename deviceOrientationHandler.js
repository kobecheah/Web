function appendRotateDeviceCanvas() {
    var str = '<link rel="stylesheet" href="./style.css" /><div id="treasure-hunt-landscape-overlay" style="display: flex"><p>Please rotate your phone to Potrait Mode</p><img src="./images/RotatePhone.png" /></div>';
    document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", str);
}

function updateRotateDeviceCanvas(landscapeMediaMatcher) {
    var display = (isIOS ? isIosLandscape(landscapeMediaMatcher) : isAndroidLandscape())
    document.getElementById('treasure-hunt-landscape-overlay').style.display = display ? 'flex' : 'none';
    document.getElementById('treasure-hunt-content').style.display = display ? 'none' : 'block';
}

appendRotateDeviceCanvas();

var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
let landscape = window.matchMedia("(orientation: landscape)");

updateRotateDeviceCanvas(landscape);

landscape.addEventListener("change", function (e) {
    updateRotateDeviceCanvas(e);
});

function isAndroidLandscape() {
    return screen.availWidth > screen.availHeight;
}

function isIosLandscape(match) {
    return match.matches;
}