//@ts-nocheck
import Memory from 'memoryjs';
import screenshot from 'screenshot-desktop';

// 截图屏幕
// screenshot().then((img) => {
//   console.log(img)
//   // ...
// }).catch((err) => {
// })



// 读取进程

// const processName = "WeChat.exe";

// Memory.getProcesses((error, processes) => {
//   if(error) {
//     return;
//   }
//   processes.forEach((pro) => {
//     if(pro.szExeFile == processName) {
//       console.log(pro)
//       Memory.findModule(pro.szExeFile, pro.th32ProcessID, (error, mod) => {
//         console.log(mod)
//         Memory.readMemory(pro, mod, 'string', (error, value) => console.log(value))
//       });
//     }
//   })
// });

