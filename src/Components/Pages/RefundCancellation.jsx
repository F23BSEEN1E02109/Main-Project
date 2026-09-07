import React from 'react'
import Refund from '../Supportpage/Refund & Cancellation/Refund'
import FairPolicy from '../Supportpage/Refund & Cancellation/FairPolicy'
import Information from '../Supportpage/Refund & Cancellation/Information'
import ApproveRefund from '../Supportpage/Refund & Cancellation/ApproveRefund'

const RefundCancellation = () => {
  return (
    <div>
      <Refund/>
      <FairPolicy/> 
      <Information/>  
      <ApproveRefund/>      
    </div>
  )
}

export default RefundCancellation
