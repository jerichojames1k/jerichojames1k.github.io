

// basic functionalities
$(document).ready(function () {
    var topic1= $("input[name='topic']").val();
    $("#btn-disconnect").click(function () {
      client.end();
      alert("It's done!");
      $("#status").val("Disconnected !");
      location.reload();
    })

    $("#btn-connect").click(function () {
  
      var client = mqtt.connect($("#address").val());

     //Stablishconnection
      client.on("connect", function () {
        $("#status").val("Connected !");
        console.log("successfully connected");
      })

      //message
      client.on("message", function (topic, payload) {
        console.log([topic, payload].join(": "));   
      })


      subs=false;
      $("#btn-publish").click(function(){
      
        var topic= $("input[name='topic']").val();
        var payload = $("input[name='payload']").val();
        var row = "<tr><td>"+ topic +"</td><td>"+ payload+"</td><td>"+moment().format('MMMM Do YYYY, h:mm:ss a')+ "</td></tr>";
        $("#tbpublish").append(row);
        subs=true;
  
        client.publish(topic, payload)
      })
      
      $("#btn-subscribe").click(function(){
        var topic=$("input[name='topicSub']").val();
        var row = "<tr><td>"+ topic +"</td><td>"+moment().format('MMMM Do YYYY, h:mm:ss a')+ "</td></tr>";
        $("#tbsubscribe").append(row);
        $("#btn-publish").click(function(){
          var payload = $("input[name='payload']").val();
          if(topic==topic1){
            var row = "<tr><td>"+ topic +"</td><td>"+ payload+"</td><td>"+moment().format('MMMM Do YYYY, h:mm:ss a')+ "</td></tr>";
            $("#tbbroker").append(row);
          }
          
        });
        topic1 =  $("input[name='topic']").val();
        
        client.subscribe(topic)
 
        
      })
      $("#btn-unsubscribe").click(function(){
        var topic=$("input[name='topicSub']").val();
        client.unsubscribe(topic)
        topic1= "";
      })
  
    })

  })
  
  
  
  
  
  
  