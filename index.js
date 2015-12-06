/**
 * Created by Adrian on 06.12.2015.
 */


handleResponse = function(e) {
   // if(e.origin == 'http://localhost:63342/') {
        var action = e.data.split(':')[0];
        switch (action) {
            case 'responseText':
                console.log(e.data.split(':')[1]);
                break;
            case 'sendTextToIndex':
                console.log(e.data.split(':')[1]);
                break;
            default:
                console.log("Unknown message: "+e.data);

        }
   // }
}
window.addEventListener('message', handleResponse, false);


function sendTextToiFrame() {
    iframe = document.getElementById('if1');
    console.log("got iframe, send message");
    iframe.contentWindow.postMessage('sendtext','*');
}