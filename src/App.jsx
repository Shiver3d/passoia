import Header from './components/Header/index.jsx'
import Banner from './components/Banner/index.jsx'
import Looks from './components/Looks/index.jsx'
import Batoes from './components/Card-batoes/index.jsx'
import Novidades from './components/Novidades/index.jsx'
import Footer from './components/Footer/index.jsx'

// componente principal que agrega todas as seções da página
function App(){
  return (
    <>
      <Header/>
      <Banner/>
      <Looks/>
      <Batoes/>
      <Novidades/>
      <Footer/>
    </>
  )
}

export default App
