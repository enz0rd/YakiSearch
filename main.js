const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    height: 768,
    width: 1366,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    sizable: false,
  });
  win.loadFile("./src/views/index.html");
  win.setMenu(null);
};

app.on("ready", () => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
