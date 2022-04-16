//@ts-nocheck

import Memory from 'memoryjs';

const processName = "WeChat.exe";

Memory.getProcesses((error, processes) => {
  processes.forEach((pro) => {
    if(pro.szExeFile == processName) {
      console.log(pro)
    }
  })
});