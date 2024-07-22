import './App.css';
import Header from './components/Header';
import SoccerStore from './components/SoccerStore';
import { CartContextProvider } from './contexts/CartContext';
import { UserProgressContextProvider } from './contexts/UserProgressContext';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
function App() {

  return (
    <>
    <PrimeReactProvider>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />
          <SoccerStore />
        </CartContextProvider>
      </UserProgressContextProvider>
    </PrimeReactProvider>
    </>
  )
}

export default App
