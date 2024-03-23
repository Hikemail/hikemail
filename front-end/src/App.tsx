import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )
}

export default App