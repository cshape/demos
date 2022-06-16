
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
        let visitorId = ""
        let sessionId = ""
        let onSuccessVisitor = (data) => {
            visitorId = data; 
            console.log("visitorId :  " + visitorId);
        }
        let onSuccessSession = (data) => {
            sessionId = data; 
            console.log("sessionId :  " + sessionId);
        }
        let onFailure = (err) => {
            console.log(err);
        }
        var path = "visitorInfo.visitorId";
        var path2 = "chatInfo.rtSessionId";
        lpTag.agentSDK.get(path, onSuccessVisitor, onFailure);
        lpTag.agentSDK.get(path2, onSuccessSession, onFailure);

        axios({
            method: 'get',
            url: `https://z1.context.liveperson.net/v1/account/53271635/accountId/${sessionId}/properties`,
            headers: {
            'Content-Type': 'application/json',
            'maven-api-key': `DV81jFETsdNTMyNzE2MzU=`
            },
        }).then(response => {
            console.log(response)
        }).then (err => {
            console.log(err)
        })
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