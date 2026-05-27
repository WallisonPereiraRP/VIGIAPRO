import './App.css'
import { VigiaProHeader } from './Home/Header'
import { VigiaProContact } from './Home/VigiaProContact'
import { VigiaProFooter } from './Home/VigiaProFooter'
import { VigiaProPlans } from './Home/VigiaProPlans'
import { VigiaProServices } from './Home/VigiaProServices'
import { VigiaProWhatsAppFloat } from './Home/VigiaProWhatsappFloat'
// import VigiaProHeader from './Home/Header'

function App() {

  return (
    <>
     {/* <VigiaProHeader /> */}
     <VigiaProHeader />
     <VigiaProServices />
     <VigiaProPlans />
     <VigiaProContact />
     <VigiaProFooter />
     <VigiaProWhatsAppFloat />
    </>
  )
}

export default App
