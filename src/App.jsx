import Header from './components/Header';
import Footer from './components/Footer';
import './assets/styles/components/btn.scss';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main  className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
export default App
