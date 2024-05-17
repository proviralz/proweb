import React, { useState } from 'react'

const PrivacyPolicy = () => {

    const [termsChecked, setTermsChecked] = useState(false);
    const [privacyChecked, setPrivacyChecked] = useState(false);
    const [marketingChecked, setMarketingChecked] = useState(false);

    const handleTermsChange = () => setTermsChecked(!termsChecked);
    const handlePrivacyChange = () => setPrivacyChecked(!privacyChecked);
    const handleMarketingChange = () => setMarketingChecked(!marketingChecked);

  return (
    <div>
        <div className="">
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="terms"
                    checked={termsChecked}
                    onChange={handleTermsChange}
                    className="h-4 w-4 text-[#31013f] form-checkbox focus:ring-[#31013f] border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 text-gray-700">
                    I agree to the Terms and Conditions
                </label>
            </div>

            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="privacy"
                    checked={privacyChecked}
                    onChange={handlePrivacyChange}
                    className="h-4 w-4 text-[#31013f] form-checkbox focus:ring-[#31013f] border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="ml-2 text-gray-700">
                    I agree to the Privacy Policy
                </label>
            </div>

            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="marketing"
                    checked={marketingChecked}
                    onChange={handleMarketingChange}
                    className="h-4 w-4 text-[#31013f] form-checkbox focus:ring-[#31013f] border-gray-300 rounded"
                />
                <label htmlFor="marketing" className="ml-2 text-gray-700">
                    I agree to receive marketing emails
                </label>
            </div>
        </div>

        <div className=' mt-5 flex items-center justify-between'>
            <div>
                <p className=' purple-btn text-xs font-light'>
                    Save
                </p>
            </div>
            <div>
                <p className=' text-xs bg-red-500 uppercase px-4 py-2 text-white font-light'>
                    Delete Account
                </p>
            </div>
        </div>
    </div>
  )
}

export default PrivacyPolicy