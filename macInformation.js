import { cpus, homedir, platform, arch, release as _release } from "os";
import { writeFile } from "fs";

let cpuinfo = cpus();
let homedirectory = homedir();
let osPlatform = platform();
let architecture = arch();
let release = _release();
const fileName = process.env.FILE_NAME || 'macInformation.txt';

let allInfo = {
  osPlatform,
  architecture,
  homedirectory,
  release,
  cpuinfo,
};

writeFile(
  homedirectory + "/Desktop/" + fileName,
  JSON.stringify(allInfo),
  (error) => {
    if (error) throw error;
    console.log("File created successfully!");
  }
);
