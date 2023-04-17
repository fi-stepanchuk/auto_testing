const {simulateApiCall} = require('./fiveth_task')

async function callInCall(){
    const apiCallResponse = await simulateApiCall();

    return new Promise((resolve)=>resolve(apiCallResponse));
}

module.exports = {callInCall}