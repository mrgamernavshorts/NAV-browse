const { app, BrowserWindow, Menu, MenuItem, globalShortcut, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      icon: "logo.ico"
    },
  });
  win.menuBarVisible = false;
  win.loadFile("index.html");

  const menu = new Menu();
  menu.append(new MenuItem({label: "Reload (Alt+R)", role: "reload"}))
  menu.append(new MenuItem({label: "Front (Alt+→)", click: () => win.webContents.navigationHistory.goForward()}))
  menu.append(new MenuItem({label: "Back (Alt+←)", click: () => win.webContents.navigationHistory.goBack()}))
  menu.append(new MenuItem({label: "Home (Alt+H)", click: () => win.webContents.navigationHistory.goToIndex(0)}))
  globalShortcut.register("Alt+Left", () => {
    win.webContents.navigationHistory.goBack();
  })
  globalShortcut.register("Alt+Right", () => {
    win.webContents.navigationHistory.goForward();
  })
  globalShortcut.register("Alt+r", () => {
    win.webContents.reload();
  })
  globalShortcut.register("Alt+h", () => {
    win.webContents.navigationHistory.goToIndex(0);
  })

  win.webContents.on('context-menu', (event, params) => {
    menu.popup(win, params.x, params.y)
  })

}



app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
