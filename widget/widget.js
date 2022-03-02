console.log("hello!")
var updateCallback = function(data) {
    // Do something with the returning data
    var path = data.key;
    var value = data.newValue;
    // called each time the value is updated.
    // If there's an existing value when bind is called - this callback
    // will be called with the existing value
};

var notifyWhenDone = function(err) {
    if (err) {
        // Do something with the error
    }
    // called when the bind is completed successfully,
    // or when the action terminated with an error.
};
var pathToData = "chatTranscript.lines";
lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);