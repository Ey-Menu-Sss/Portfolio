import { useEffect, } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home.jsx'
import Test from './pages/test.jsx'

function App() {
  const location = useLocation()
  // console.log(location)
  // const [entered, setEntered] = useState(false)

  useEffect(()=>{

    if (location.pathname === '/'){
      // setEntered(false)
    } else {
      // setEntered(true)
    }



  },[location.pathname])

  return (
    <div className='App'>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<Test/>}/>

      </Routes>
    </div>
  );
}

export default App;
