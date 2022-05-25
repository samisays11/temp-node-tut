

const os = require('os')

const user = os.userInfo()


// how long computer has been running in seconds
// console.log(`The system uptime is ${os.uptime} seconds`);



const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

// console.log(currentOS);


const path = require('path')

const filepath = path.join('/content', 'subfolder', 'text.txt')

const base = path.basename(filepath)


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(absolute);

// console.log(base);

// console.log(filepath);

// console.log(path.sep);