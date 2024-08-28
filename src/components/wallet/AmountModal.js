const { PaystackButton } = require("react-paystack")

export const AmountModal = ({setPayAmount, resetForm, componentProps}) => {

    return (
        <div className="fixed top-0 inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 space-y-5 w-96">
            <h3 className="text-xl font-semibold text-[#31013f]">Add Funds</h3>
            <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md  outline-none"
                onChange={(e) => setPayAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <div className="flex justify-end space-x-3">
                <button 
                    onClick={resetForm}
                    className="px-5 py-2 bg-gray-300 text-gray-700 rounded-md">
                    Cancel
                </button>
                <PaystackButton {...componentProps} className="px-5 py-2 bg-[#31013f] text-white rounded-md" />
            </div>
            </div>
        </div>
    )
}