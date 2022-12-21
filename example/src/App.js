import React from 'react'
import { UnifiIdentityActivate } from 'uid-agent-component/dist/index.es'

function App() {
  return (
    <UnifiIdentityActivate 
      consoleRootUrl=""
      deps={{swaiFetch: ()=> Promise.resolve()}}

    />
  );
}

export default App;
