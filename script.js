const apiDomain = "https://api-sekingo-stage.thebluelobby.com/";
const appUrl = "https://kobecheah.github.io/TreasureHunt/";

function redirectIfNoLoginRecord(url) {
    if (sessionStorage.getItem('token') != null) {
        return;
    }
    const token = getCookie("rmbtoken");
    if (token == '')
        window.location.replace(url);
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function storeParams() {
    const params = window.location.search;
    if (params != '') {
        sessionStorage.setItem("params", params);
    }
}