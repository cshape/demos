console.log("hello!");
lpTag.agentSDK.init()
var updateCallback = function(data) {
    // Do something with the returning data
    // var path = data.key;
    var chatLines = data.newValue;
    console.log("DATA: " + data);
    console.log("VALUE: " + value);
    let usertext = document.getElementById("usertext");
    let textFromSDK = ""
    chatLines.map(line => {
        textFromSDK = textFromSDK + line.text
    })
    usertext.innerHTML = textFromSDK;
    // called each time the value is updated.
    // If there's an existing value when bind is called - this callback
    // will be called with the existing value
};

var notifyWhenDone = function(err) {
    if (err) {
        console.log(err);
    }
    console.log("set the value");
};
var pathToData = "chatTranscript.lines";
lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);