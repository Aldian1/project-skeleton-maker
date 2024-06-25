import React from 'react';
import Controls from './components/Controls';
import Messages from './components/Messages';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
    <Messages />
      <Controls />
    </div>
  );
}
export default App;