import React from 'react'
import Investor from '../Financepage/Investors/Investor'
import Partner from '../Financepage/Investors/Partner'
import PartnerShip from '../Financepage/Investors/PartnerShip'
import Explore from '../Financepage/Investors/Explore'

const Investors = () => {
  return (
    <div>
      <Investor/>
      <Partner/>
      <PartnerShip/>
      <Explore/>
    </div>
  )
}

export default Investors
