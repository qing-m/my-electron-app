const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
// 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

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    // win.loadFile("index.html");
    win.loadURL("https://api.minsuwuliu.com/login?redirect=%2Fexpress%2FreciOrder");

    // win.webContents.on("did-finish-load", () => {
    //     win.webContents.print({ silent: false, printBackground: true }, (success, failureReason) => {
    //         if (!success) console.log(failureReason);
    //         console.log("Print initiated");
    //     });
    // });
};

app.whenReady().then(() => {
    ipcMain.handle("ping", () => "pong");

    createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
