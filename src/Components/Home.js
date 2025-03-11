import React from 'react'
import Hom1 from './Hom1'
import Hom2 from './Hom2'
import Hom3 from './Hom3'
import Hom4 from './Hom4'
import Hom5 from './Hom5'
import Hom6 from './Hom6'
import Donorinfo from './Donorinfo'
import LPAused from './LPAused'
import Addattorney from './Addattorney'
import Addattorneyinfo from './Addattorneyinfo'
import Donorwant from './Donorwant'
import ProgressSteps from './ProgressSteps'
import Home2 from './Home2'


 const Home = () => {
  return (
    <div>

 <Hom1/>
 <Hom2/>
 <Hom3/>
 <Hom4/>
 <Hom5/>
 <Hom6/>
 <Donorinfo/>
  <LPAused/>
  <Addattorney/>
  <Addattorneyinfo/>
  {/* <Donorwant/> */}
  <ProgressSteps/>
  <Home2/>
    </div>
  )
}

export default Home
