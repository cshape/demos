
lpTag.agentSDK.init()
var updateCallback = function(data) {
    // get convo lines as they happen
    var newLine = data.newValue;
    // let usertext = document.getElementById("usertext");
    // let agenttext = document.getElementById("agenttext");
    let empath = document.getElementById("empath");
    if (newLine[0].by == "Visitor") {
        usertext.innerHTML = newLine[0].text;
        console.log('visitor message');
        fetch(`https://eo718j3o670235k.m.pipedream.net`, {
            method: "POST",
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({
                message: "hi this is cale",
                prompt: newLine[0].text
              })
          })
          .then((response) => response.json())
          .then(data => {
            empath.innerHTML = data.continuation
            console.log(data)
          })
          
    } else {
        // agenttext.innerHTML = newLine[0].text;
        console.log('agent message');
    }
};

var notifyWhenDone = function(err) {
    if (err) {
        console.log(err);
    }
    console.log("set the value");
};
var pathToData = "chatTranscript.lines";
lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);