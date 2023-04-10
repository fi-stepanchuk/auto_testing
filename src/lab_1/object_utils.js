function objectContainsField(obj, field) {
    if (
        typeof obj === 'object' &&
        !Array.isArray(obj) &&
        obj !== null
    ){
        return Object.keys(obj).some(key => {
            if(typeof obj[key] === 'object' && key !== field){
                return objectContainsField(obj[key], field);
            }
            else{
                return key === field;
            }
        });
    }

    return false
}

const person = {
    firstName: 'Androo',
    lastName: 'Stepanchuk',
    introduce() {
      console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
    },
  };

module.exports = {objectContainsField, person}