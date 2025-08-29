import Home from './pages/Home'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='bg-zinc-900 w-full h-full min-h-screen flex flex-col'>
        <div id="bodyContainer" className='flex-grow p-4 lg:px-20 xl:px-30 2xl:px-40'>
          <Home />
        </div>
        <Footer />
    </div>
  )
}

export default App
