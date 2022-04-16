import { BrowserWindow } from 'electron';
import { isDevelopment } from "../utils/env";
import { getPath } from '../utils/path';

/**
 * @description 创建主渲染进程
 */
export function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    show: true,
    icon: getPath(`../../${isDevelopment() ? '../public/' : ''}favicon.ico`),
    webPreferences: {
      nodeIntegration: true,
      preload: getPath('preload.js')
    }
  });
  
  if (isDevelopment()) {
    win.loadURL('http://localhost:3000/')
    win.webContents.openDevTools()
  } else {
    win.loadFile('dist/render/index.html')
  }

  // 关闭时候隐藏窗口
  win.on("close", ev => {
    (ev as any).sender.hide();
    ev.preventDefault(); // prevent quit process
  });

  return win
}