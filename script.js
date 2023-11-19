const data = require("./data").data;

const getRandomMessage = data => {
    let index = Math.floor((Math.random() * data.length));
    return data[index];
};

