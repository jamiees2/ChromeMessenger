function init() {
    var webview = document.querySelector('webview');
    webview.addEventListener("loadstop", function(e){
        webview.insertCSS({file: "style.css"});
    });
    webview.addEventListener('newwindow', function(e) {
        window.open(e.targetUrl);
    });
    webview.addEventListener('permissionrequest', function(e) {
        if (e.permission === 'media') {
            e.request.allow();
        }
        console.log(e);
    });
}
window.onload = init;
