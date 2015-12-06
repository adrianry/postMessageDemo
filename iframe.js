/**
 * Created by Adrian on 06.12.2015.
 */

respondToSendtext = function(e) {
   // if(e.origin == 'http://localhost:63342/') {
        // e.data is the string sent by the origin with postMessage.
        if(e.data == 'sendtext') {
            console.log("iframe got message...processing");
            document.getElementById("output").innerHTML = e.data;
            e.source.postMessage('responseText:'+document.title,'*');
        }
  //  }
}
// we have to listen for 'message'
window.addEventListener('message', respondToSendtext, false);


function sendTextToIndex() {
    document.getElementById("server").innerHTML = "URL: " + document.URL;
    console.log("try to send message");
    parent.postMessage('sendTextToIndex:text vom iframe','*');
}