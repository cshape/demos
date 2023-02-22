
lpTag.agentSDK.init()
var updateCallback = function(data) {
    // get convo lines as they happen
    var newLine = data.newValue;
    let usertext = document.getElementById("usertext");
    let agenttext = document.getElementById("agenttext");
    let empath = document.getElementById("empath");
    if (newLine[0].by == "Visitor") {
        usertext.innerHTML = newLine[0].text;
        console.log('setting visitor text');
        fetch(`https://eo718j3o670235k.m.pipedream.net`, {
            method: "POST",
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({
                message: "hi this is cale",
                prompt: newLine[0].text
              })
          }).then(response => {
            empath.innerHTML = response.continuation
            console.log(response)
          })
          
    } else {
        agenttext.innerHTML = newLine[0].text;
        console.log('setting agent text');
    }
    var ccs = document.getElementById("ccs");
    var ccsData = ccs.innerHTML;
    console.log("ccs data element: " + ccsData)
    if (ccsData == "") {
        // API call to grab data
        let sessionId = ""
        let onSuccessSession = (data) => {
            sessionId = data; 
            console.log("sessionId:  " + sessionId);
            // axios({
            //     method: 'get',
            //     url: `https://z1.context.liveperson.net/v1/account/53271635/accountId/${sessionId}/properties/accountId`,
            //     headers: {
            //     'Content-Type': 'application/json',
            //     'maven-api-key': `DV81jFETsdNTMyNzE2MzU=`
            //     },
            // }).then(response => {
            //     console.log(response)
            //     ccs.innerHTML = response.data;
            // }).then (err => {
            //     console.log(err)
            // })
        }
        let onFailure = (err) => {
            console.log(err);
        }
        var sessionPath = "chatInfo.rtSessionId";
        lpTag.agentSDK.get(sessionPath, onSuccessSession, onFailure);
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