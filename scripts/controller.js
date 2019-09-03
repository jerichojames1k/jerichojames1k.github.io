//var client
// Create a client instance
var client = new Paho.Client("broker.hivemq.com", 8000, "clientId");
var btnConnect = document.getElementById("btn-connect");
var btnPublish = document.getElementById("btn-publish");

// set callback handlers
//client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
//client.connect({onSuccess:onConnect});

// called when the client connects
function onConnect() {
// Once a connection has been made, make a subscription and send a message.
console.log("onConnect");
client.subscribe("World");
// message = new Paho.Message("Hello");
// message.destinationName = "World";
// client.send(message);
}

// called when the client loses its connection
// function onConnectionLost(responseObject) {
// if (responseObject.errorCode !== 0) {
// console.log("onConnectionLost:"+responseObject.errorMessage);
// }
// }

// called when a message arrives
function onMessageArrived(message) {
console.log("onMessageArrived:"+message.payloadString);
}

btnConnect.addEventListener('click',function(e){
e.preventDefault();
console.log("Connect Button")
// connect the client
client.connect({onSuccess:onConnect});
})

btnPublish.addEventListener('click',function(e){
e.preventDefault();
console.log("Publish Button")
var wordText=document.getElementById("textbox").value;

message = new Paho.Message(wordText);
message.destinationName = "World";
client.send(message);

})
