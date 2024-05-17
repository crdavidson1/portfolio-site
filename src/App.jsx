import { Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import Background from './components/Background';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App