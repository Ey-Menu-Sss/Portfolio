import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import Test from './pages/test.jsx'
import ResumeDownload from './components/resumeDownload.jsx'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<ResumeDownload/>}/>
      </Routes>
    </div>
  );
}

export default App;
