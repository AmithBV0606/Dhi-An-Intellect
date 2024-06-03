import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex animate-fadeIn">
        <Sidebar />
        <Main />
      </div>
    </>
  )
}

export default App