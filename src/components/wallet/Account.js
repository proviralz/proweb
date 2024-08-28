import React, { useState } from 'react'
import { PaystackButton } from 'react-paystack';
import { useSelector } from 'react-redux';
import { AmountModal } from './AmountModal';

const Account = () => {

    const [showAmount, setShowAmount] = useState(false)
    const [amount, setAmount] = useState("")
    const [paymentStatus, setPaymentStatus] = useState(null);
    const publicKey = 'pk_test_9364105df8a33975edb2780324d9331ed9194b2c';
    const user = useSelector(state => state.user.info)


    const handleSuccess = (response) => {
        console.log("Payment Response:", response);
        if (response.status === "success") {
          setPaymentStatus("Payment successful! Transaction reference: " + response.reference);
        } else {
          setPaymentStatus("Payment failed. Please try again.");
        }
        resetForm();
      };

      const resetForm = () => {
        setAmount("");
        setShowAmount(false);
      };


    const componentProps = {
        email: user?.email,
        amount: amount * 100 ,
        metadata: {
          userId: user?._id,
          email: user?.email,
        },
        publicKey,
        text: 'Pay',
        onSuccess: handleSuccess,
        onClose: () => alert("Are you sure you want to cancel?"),
      };


      

    
    




  return (
    <div className=' space-y-5'>
        <div>
            <p>
                Wallet
            </p>
        </div>
        <div className=' wallet-cards'>
            <div>
                <p className=' text-xs font-light'>
                    Available Balance
                </p>
                <p>
                    $0.00
                </p>
            </div>
            <div>
                <p className=' text-xs font-light'>
                    Pending
                </p>
                <p>
                    $0.00
                </p>
            </div>
            {/* <div className=' flex flex-1'>
                <div className=' border-r w-32'>
                    <p className=' text-xs font-light '>
                        Affliate Balance
                    </p>
                    <p>
                        $0.00
                    </p>
                </div>
                <div className=' space-y-1 pl-4 flex flex-col'>
                    <p className=' text-xs font-semibold '>
                        Like to earn some more?
                    </p>
                    <p className=' text-xs '>
                        Refer people and earn more cash
                    </p>
                    <div className=''>
                        <p className=' inline-block purple-btn'>
                            start earning
                        </p>
                    </div>
                </div>
            </div> */}
        </div>

        {/* buttons */}
        <div className=' flex gap-5 capitalize'>
            <div>
                <p onClick={()=> setShowAmount(true)} className='trans-purple-btn'>
                    + add funds
                </p>
            </div>
            <div>
                <p className='trans-purple-btn'>
                    withdraw funds
                </p>
            </div>
        </div>

        {showAmount && (
            <AmountModal setPayAmount={setAmount} resetForm={resetForm} componentProps={componentProps}/>
        )}

        {paymentStatus && (
            <div className="payment-status mt-4 p-3 border text-green-900/80 border-gray-300 rounded-md text-center">
                {paymentStatus}
            </div>
        )}
    </div>
  )
}

export default Account