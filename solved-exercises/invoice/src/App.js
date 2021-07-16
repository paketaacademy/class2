import './App.css';
import { useEffect, useState } from 'react'

import { Invoice, contador } from './components/Invoice'
import Bar from './components/Bar'

function App() {
  const [component, setComponent] = useState('bar')
  
  const activeBar = () => setComponent('bar')
  const activeInvoice = () => setComponent('invoice')

  useEffect(() => {
    console.log("ATUALIZOU", component)
  }, [component])

  return (
    <div className="App"> 
      {component === 'invoice' && (<Invoice />)}
      {component === 'bar' && (<Bar />)}
      <div style={{ width: '100%', backgroundColor: 'red'}}>
        <button onClick={activeBar}>
          Click BAR
        </button>
        <button onClick={activeInvoice}>
          Click INVOICE
        </button>
      </div>
    </div>
  );
}

export default App;
