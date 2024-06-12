import './App.css'
import Appbar from './components/Appbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CountryDetail from './pages/CountryDetail'
import Home from './pages/Home'
import { ThemeProvider } from './ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Appbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:country' element={<CountryDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
