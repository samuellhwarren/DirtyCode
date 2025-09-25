const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  win.loadURL('http://localhost:5173'); // Load Vite React dev server URL

  win.webContents.openDevTools(); // Optional: open dev tools for debugging
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// IPC handler for running SQL query from renderer
ipcMain.handle('execute-query', async (event, query) => {
  console.log('Received query:', query);
  // TODO: Connect to SQL Server and execute query here
  return { success: true,  [{ id: 1, name: 'Sample Result' }] };
});
