
import { BrowserWindow, Tray } from 'electron';
type ProcessResolve<T> = (value: T | PromiseLike<T>) => void

class CurrentProcess {
  //@ts-ignore
  app: Electron.App = null;
  //@ts-ignore
  render: BrowserWindow = null;
  //@ts-ignore
  tray: Tray = null;

  wins: BrowserWindow[] = [];

  created: Promise<CurrentProcess>;



  private resolve: ProcessResolve<CurrentProcess> | null = null
  private reject: ProcessResolve<void> | null = null

  constructor() {
    this.created = new Promise((resolve, reject) => { 
      this.resolve = resolve;
      this.reject = reject;
    });
    this.created.then(() => {
      this.resolve = null;
      this.reject = null;
    });
  }

  /**
   * @description 初始进程
   */
  init(app: CurrentProcess['app'], render:CurrentProcess['render'],  tray:CurrentProcess['tray']) {
    if(this.resolve) {
      this.app = app;
      this.render = render;
      this.tray = tray;
      this.resolve(this);
    }
  }

  /**
   * @description 清空进程
   */
   quit() {
    this.reject?.();
    this.tray?.destroy?.();
    this.app?.quit?.();
  }
}

export const currentProcess = new CurrentProcess();
