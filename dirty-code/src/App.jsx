import { useState } from 'react';
import Editor from '@monaco-editor/react';

function App() {
  const [query, setQuery] = useState('SELECT * FROM sys.tables');
  const [result, setResult] = useState(null);

  async function runQuery() {
    if (!window.api || !window.api.sendQuery) {
      alert('API not available - make sure you run in Electron');
      return;
    }
    const response = await window.api.sendQuery(query);
    setResult(response.data);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Dirty Code - SQL Editor</h1>
      <Editor
        height="400px"
        defaultLanguage="sql"
        value={query}
        onChange={setQuery}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          automaticLayout: true,
        }}
      />
      <button style={{ marginTop: 10 }} onClick={runQuery}>
        Run Query
      </button>
      <pre style={{ marginTop: 20, whiteSpace: 'pre-wrap' }}>
        {result ? JSON.stringify(result, null, 2) : 'Query result will appear here...'}
      </pre>
    </div>
  );
}

export default App;
