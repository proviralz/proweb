import React from 'react'
import Layout from '../layout/Layout'

const Terms = () => {
  return (
    <Layout>
        <div className=' p-5 md:p-10 bg-neutral-100'>
            <div className="p-5 md:p-10 bg-white text-neutral-600">
                <h1 className="text-2xl font-bold mb-5">TERMS OF USE</h1>
                <p className="mb-4">
                    This agreement states the terms of your use of Proviralz as a service provider or Recruiter or as an Affiliate. You agree to be bound by the Agreements and declare that you have read and understood them well before clicking the “Agree” button. If you “Disagree” you may not be able to use our services.
                </p>
                <ol className="list-decimal list-inside mb-4">
                    <li className="mb-4">
                    <strong>User Eligibility:</strong>
                    <p>By using our services you agree that you are over the age of 18 years or older and have a skill you are willing to offer or hire.</p>
                    </li>
                    <li className="mb-4">
                    <strong>Proviralz Duty:</strong>
                    <p>Proviralz connects (users) recruiters with skilled workers (services providers). We ensure that users get the best hands to handle their project through our seamless and user-friendly platform.</p>
                    <p>Proviralz implements screenings and reviews from users on their experiences to ensure safety and trust. Users are responsible for researching, enquiring and verifying service providers before carrying out transactions with him/her.</p>
                    <p>While we (Proviralz) strive to connect users with the best service providers, we cannot guarantee the outcome of the services rendered by service providers. Users acknowledge that they assume a level of risk and agree that they understand the duty of Proviralz is limited to being a facilitator of connection. Users are encouraged to report issues and give feedback on their interaction with service providers for Proviralz to attempt a resolution.</p>
                    </li>
                    <li className="mb-4">
                    <strong>Payment:</strong>
                    <p>All transactions relating to job matching services provided on Proviralz must be paid through the Proviralz platform. Do not make payment to service providers or third parties outside the services offered on the Proviralz platform.</p>
                    </li>
                    <li className="mb-4">
                    <strong>External Links:</strong>
                    <p>Proviralz may provide external links to websites to enhance your experience on the platform, but we are not responsible for the content or services provided by those websites. Any harm or damage arising as a result of using those websites is not the responsibility of Proviralz.</p>
                    </li>
                    <li className="mb-4">
                    <strong>Portfolio Management:</strong>
                    <p>Service providers are solely responsible for the provision of images, videos, or media uploaded on their profiles, and Proviralz will not be responsible for any misleading as a result of it.</p>
                    </li>
                    <li className="mb-4">
                    <strong>Governmental Law:</strong>
                    <p>Nigerian law shall control the duties, execution, interpretation, and content of these agreements.</p>
                    </li>
                </ol>
                <h2 className="text-xl font-bold mb-4">DATA PROTECTION</h2>
                <p className="mb-4">
                    You “Agree” that access to your password and reset of your password are solely your responsibility to protect.
                </p>
                <p>
                    Proviralz will not share, sell, exchange, and provide your data to third parties except on the grounds of enhancing your positive experience on our platform, which is on the grounds of your approval to use a third-party website.
                </p>
            </div>
        </div>
    </Layout>
  )
}

export default Terms