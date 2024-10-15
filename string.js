const client = require("./client");

async function init() {
    await client.set("msg:6" , "Hey from nodejs");
    await client.expire("msg:6", 10);
    const result = await client.get('user:1');
    console.log("result:- ", result);
}

init();