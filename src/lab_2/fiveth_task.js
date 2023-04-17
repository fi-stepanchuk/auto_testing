async function simulateApiCall() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
            message: 'Response from API'
        });
      }, 1000);
    });
}

async function fetchJSON(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}


module.exports = {simulateApiCall, fetchJSON}
