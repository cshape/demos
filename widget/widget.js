lpTag.agentSDK.init()
var updateCallback = function(data) {
    // get convo lines as they happen
    var newLine = data.newValue;
    let usertext = document.getElementById("usertext");
    let agenttext = document.getElementById("agenttext");
    if (newLine[0].by == "Visitor") {
        usertext.innerHTML = newLine[0].text;
    } else {
        agenttext.innerHTML = newLine[0].text;
    }
    var ccsData = document.getElementById("ccs").innerHTML;
    console.log(ccsData)
    if (ccsData == "") {
        // API call to grab data
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