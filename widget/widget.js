lpTag.agentSDK.init()
var updateCallback = function(data) {
    // get convo lines as they happen
    var newLine = data.newValue;
    let usertext = document.getElementById("usertext");
    let agenttext = document.getElementById("agenttext");
    if (newLine[0].by == "Visitor") {
        usertext.innerHTML = newLine[0].text;
        console.log('setting visitor text');
    } else {
        agenttext.innerHTML = newLine[0].text;
        console.log('setting agent text');
    }
    var ccsData = document.getElementById("ccs").innerHTML;
    console.log("ccs data element: " + ccsData)
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