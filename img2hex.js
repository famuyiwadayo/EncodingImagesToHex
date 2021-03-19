// Require file system access
const fs = require('fs');
const path = require('path');

// Read file buffer 
const imgReadBuffer = fs.readFileSync(path.join(__dirname, 'images/dog1.jpeg'));
// Encode image buffer to hex
const imgHexEncode = new Buffer.from(imgReadBuffer).toString('hex');
// Output encoded data to console
// console.log(imgHexEncode)


// Decode hex string
const imgHexDecode = new Buffer.from(imgHexEncode, 'hex');
fs.writeFileSync('images/decodedDog1.jpg', imgHexDecode);



