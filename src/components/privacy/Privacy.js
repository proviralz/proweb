import React from 'react'
import Layout from '../layout/Layout'

const Privacy = () => {
  return (
    <Layout>
        <div className=' p-5 md:p-10 bg-neutral-100'>
            <div className="p-5 md:p-10 bg-white text-neutral-600">
                <h1 className="text-2xl font-bold mb-5">PRIVACY POLICY</h1>
                <p className="mb-4">
                    This privacy policy explains how we collect, use, and protect your personal data when you use our website, app, or services. By using our website, you consent to the practices of Proviralz stated below.
                </p>
                <h2 className="text-xl font-bold mb-4">Collection of Personal Data</h2>
                <p className="mb-4">
                    When you accept to use our website/app services, we will require you to provide personal data such as:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Business name</li>
                    <li>Business phone number</li>
                    <li>Email Address</li>
                    <li>Detailed Business address</li>
                    <li>Profession</li>
                    <li>Work experience</li>
                    <li>Qualification</li>
                    <li>Working Hours</li>
                    <li>Bank details</li>
                    <li>NIN, etc.</li>
                </ul>
                <h2 className="text-xl font-bold mb-4">Use of Personal Information</h2>
                <p className="mb-4">
                    We may use your data for the following purposes:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>To provide you with the best match that suits your demand</li>
                    <li>To tailor job openings to you based on your expertise</li>
                    <li>To provide you with updates and trends on our website</li>
                    <li>For legal obligations</li>
                    <li>To process swift payment for services rendered</li>
                </ul>
            </div> 
        </div>
    </Layout>
  )
}

export default Privacy