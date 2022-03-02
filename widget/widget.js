console.log("hello!");
lpTag.agentSDK.init()
var updateCallback = function(data) {
    // Do something with the returning data
    // var path = data.key;
    // var newLine = JSON.stringify(data.newValue);
    var newLine = data.newValue;
    // console.log("DATA: " + JSON.stringify(data));
    // console.log("stringified new line: " + newLine);
    // let newInfoArray = JSON.parse(newLine)
    let usertext = document.getElementById("usertext");
    let agenttext = document.getElementById("agenttext");
    console.log(newLine[0].text)
    if (newLine[0].by = "Visitor") {
        usertext.innerHTML = newLine[0].text;
    } else {
        agenttext.innerHTML = newLine[0].text;
    }
    // usertext.innerHTML = newInfoArray[0].text;
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

