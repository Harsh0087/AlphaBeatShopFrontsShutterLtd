import React from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  Clients, 
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  Testimonials,
 
} from './components'
import styles from './style'

import Form from '../src/components/Form.jsx'

const App = () => {
  return (
    
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          {/* <Billing/> */}
          {/* <CardDeal/> */}
          {/* <Testimonials/> */}
          {/* <Clients/> */}
          <CTA/>
          <Form/>
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default App