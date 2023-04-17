
async function asyncSecondTask(resolveWord){
    return Promise.resolve(resolveWord);
}

module.exports = {asyncSecondTask}