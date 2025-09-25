const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  sendQuery: (query) => ipcRenderer.invoke('execute-query', query),
});