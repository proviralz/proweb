import React, { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

const Home = () => {

    const [currentStep, setCurrentStep] = useState(1)
    const [email, setEmail] = useState("")
  return (
    <div>
        {currentStep === 1 && (
            <StepOne  email={email} setEmail={setEmail} setCurrentStep={setCurrentStep}/>
        )}
        {currentStep === 2 && (
            <StepTwo email={email} setCurrentStep={setCurrentStep}/>
        )}
        {currentStep === 3 && (
            <StepThree email={email}/>
        )}
    </div>
  )
}

export default Home