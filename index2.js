const CryptoJS = require("crypto-js")
if (process.env.ALG) {
    if(process.env.ALG === "SHA256"){
        console.log(CryptoJS.SHA256(process.argv[2]).toString(CryptoJS.enc.Hex))
    } else {
        console.log(CryptoJS.MD5(process.argv[2]).toString(CryptoJS.enc.Hex))
    }
} else {
    console.log('ALG variable is not set')
}

