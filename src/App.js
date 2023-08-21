import Header from './components/Header'
import { LinkProvider } from './components/context/linkContext'
import Hero from './components/Hero'
import Links from './components/Links'
import Statistic from './components/Statistic'
import BoostLinks from './components/BoostLinks'
import Footer from './components/Footer'

function App() {
  return (
    <LinkProvider>
      <div className="bg-[#EFF1F7] min-h-screen">
        <Header />
        <main>
          <Hero />
          <Links />
          <Statistic />
          <BoostLinks />
        </main>
        <Footer />
      </div>
    </LinkProvider>
  )
}

export default App
