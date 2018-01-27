if(process.argv.length < 3){
    console.log('usage: node index.js 5')
    return
  }
if (process.argv[2] % 2) {
    console.log("ÍMPAR");
} else {
    console.log("PAR");
}