const greeting = (name) => {
    console.log(`${name}, welcome to nodejs`);
}

const hello = (name) => {
    console.log(`Hello ${name}`);
}

module.exports = { greeting, hello };  // greeting:greeting, hello:hello