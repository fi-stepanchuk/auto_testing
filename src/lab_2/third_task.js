async function getNumber() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(42);
      }, 1000);
    });
}

async function testAsyncFunction() {
    const result = await getNumber();
    return result * 2;
}

module.exports = {testAsyncFunction};