
import { Tray, Menu } from 'electron';
import { currentProcess } from '../utils/process';
import { isDevelopment } from '../utils/env';
import { getPath } from '../utils/path';

/**
 * @description 创建系统通知栏
 */
export function createTray() {
  // 创建系统通知
  const tray = new Tray(getPath(`../../${isDevelopment() ? '../public/' : ''}favicon.ico`));
  tray.setToolTip("原神工具箱");

  // 定义交互按钮
  const menu = Menu.buildFromTemplate([
    {
      label: "设置", 
      click: () => {

      }
    },
    { 
      label: "退出", 
      click: () => {
        currentProcess.created.then(({ app, render, tray }) => {
          currentProcess.quit();
        })
    } },
  ]);
  tray.setContextMenu(menu);

  // 点击系统通知展示主渲染进程
  tray.on('click', () => {
    currentProcess.created.then(({ render }) => {
      render.show();
    })
  });

  return tray;
}



