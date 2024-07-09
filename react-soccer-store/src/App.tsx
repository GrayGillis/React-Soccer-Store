import './App.css';
import Header from './components/Header';
import SoccerStore from './components/SoccerStore';
import { CartContextProvider } from './contexts/CartContext';
function App() {

  return (
    <>
    <CartContextProvider>
      <Header />
      <SoccerStore />
    </CartContextProvider>
    </>
  )
}

export default App
