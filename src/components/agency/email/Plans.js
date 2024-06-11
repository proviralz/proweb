import React from 'react'

const Plans = () => {
  return (
    <div>
        <div className=' flex flex-col gap-5 items-center'>
            <div>
                <p className=' text-lg font-semibold'>
                    Email marketing packages
                </p>
            </div>
            <div className=' w-full'>
                <div className=' flex flex-col md:flex-row items-center justify-around w-full'>
                    <div className=' space-y-3 bg-[#bd69df]/5 rounded-lg p-5 text-fuchsia-950'>
                        <div>
                            <p className=' text-sm'>
                                Basic
                            </p>
                        </div>
                        <div>
                            <p className=' text-3xl'>
                                <span className=' text-xs'>$</span>20.00
                            </p>
                        </div>
                        <div>
                            <p className=' text-xs italic'>
                                per month
                            </p>
                        </div>
                        <div className=' space-y-2 text-xs py-3 border-t border-fuchsia-950'>
                            <p>
                                1 Loren ipsum dolor sit (Mon-Fri)
                            </p>
                            <p>
                                1 Loren ipsum dolor sit (Mon-Fri)
                            </p>
                            <p>
                                1 Loren ipsum dolor sit (Mon-Fri)
                            </p>
                            <p>
                                1 Loren ipsum dolor sit (Mon-Fri)
                            </p>
                        </div>
                        <div>
                            <p className=' text-xs trans-purple-btn uppercase'>
                                Order Now!
                            </p>
                        </div>
                    </div>

                    <div className=' space-y-3 bg-black rounded-lg p-5 text-white'>
                        <div>
                            <p className=' text-sm'>
                                Standard
                            </p>
                        </div>
                        <div>
                            <p className=' text-3xl'>
                                <span className=' text-xs'>$</span>65.00
                            </p>
                        </div>
                        <div>
                            <p className=' text-xs italic'>
                                per month
                            </p>
                        </div>
                        <div className=' space-y-2 text-xs py-3 border-t border-white'>
                            <p>
                                1 Loren ipsum dolor sit (Mon-Fri)
                            </p>
                            <p>
                                1 Loren ipsum dolor sit (Mon-Fri)
                            </p>
                            <p>
                                1 Loren ipsum dolor sit (Mon-Fri)
                            </p>
                            <p>
                                1 Loren ipsum dolor sit (Mon-Fri)
                            </p>
                        </div>
                        <div>
                            <p className=' text-xs yellow-btn-long uppercase'>
                                Order Now!
                            </p>
                        </div>
                    </div>

                    <div className=' space-y-3 bg-[#bd69df]/5 rounded-lg p-5 text-fuchsia-950'>
                        <div>
                            <p className=' text-sm'>
                                Premium
                            </p>
                        </div>
                        <div>
                            <p className=' text-3xl'>
                                <span className=' text-xs'>$</span>120.00
                            </p>
                        </div>
                        <div>
                            <p className=' text-xs italic'>
                                per month
                            </p>
                        </div>
                        <div className=' space-y-2 text-xs py-3 border-t border-fuchsia-950'>
                            <p>
                                1 Loren ipsum dolor sit (Mon-Fri)
                            </p>
                            <p>
                                1 Loren ipsum dolor sit (Mon-Fri)
                            </p>
                            <p>
                                1 Loren ipsum dolor sit (Mon-Fri)
                            </p>
                            <p>
                                1 Loren ipsum dolor sit (Mon-Fri)
                            </p>
                        </div>
                        <div>
                            <p className=' text-xs trans-purple-btn uppercase'>
                                Order Now!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Plans