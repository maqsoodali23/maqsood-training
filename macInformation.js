require ('dotenv').config();
const os = require ('os');
const fs = require ('fs');

let cpuinfo = os.cpus();
let homedirectory = os.homedir();
let osPlatform = os.platform();
let architecture = os.arch();
let release = os.release();

let allInfo = {
    osPlatform,
    architecture,
    homedirectory,
    release,
    cpuinfo,
};

fs.writeFile((homedirectory + '/Desktop/' + process.env.FILE_NAME), JSON.stringify(allInfo), (error) => {
    if(error) throw error;
    console.log('File created successfully!');
});
