const os = require("os");
let userInfo = os.userInfo();
console.log("Hola", userInfo["username"]);