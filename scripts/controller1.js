// basic functionalities
client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
var btnConnect = document.getElementById("btnConnect");
var btnDisconnect = document.getElementById("btnDisconnect");
client.subscribe("mqtt/demo")

client.on("connect", function(){
    console.log("Successfully connected");
})

client.on("message", function (topic, payload) {
  console.log([topic, payload].join(": "));
  // client.end();
})

client.publish("mqtt/demo", "hello world!")

// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })
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