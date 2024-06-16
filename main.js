const { app, BrowserWindow, Menu } = require('electron')

const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

const createMainWindow = () => {
    const win = new BrowserWindow({
      title: 'Electron Basic App',
      width:  isDev ? 1000 : 500,
      height: 600
    })

    if(isDev) {
      win.webContents.openDevTools();
    }
  
    win.loadFile('index.html')

    Menu.setApplicationMenu(null);
}

app.whenReady().then(() => {
  createMainWindow()

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  })
})

app.on('window-all-closed', () => {
  if(!isMac) {
    app.quit()
  }
})