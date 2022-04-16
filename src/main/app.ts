import { app } from 'electron';
import Server from '../server/index'
import './menu';
import { currentProcess } from './utils/process';
import { createTray } from './tray';
import { createWindow } from './win';
import './read-data'

const server = Server.listen(1126);


const init = app.whenReady();

init.then(() => {
  const win = createWindow();
  const tray = createTray();
  currentProcess.init(app, win, tray);
});
// 初始化失败 关闭本地服务
init.catch(() => {
  server.close();
  currentProcess.quit();
});

// 窗口关闭
app.on('window-all-closed', () => {
  console.log('1 程序已经关闭')
  server.close();
});

// 窗口关闭
app.on('before-quit', () => {
  console.log('2 程序已经关闭')
  process.exit()
});

// 窗口关闭
app.on('will-quit', () => {
  server.close();
});

// 窗口关闭
app.on('quit', () => {
  server.close();
});
