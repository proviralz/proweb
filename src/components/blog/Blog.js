import React from 'react'
import Layout from '../layout/Layout'

const Blog = () => {
  return (
    <Layout>
        <div className=' p-10 bg-neutral-100'>
            <div className=' bg-white p-5'>
                <div className=' flex flex-col gap-10 items-center'>
                    <div>
                        <p className=' text-[#31013f] text-xl font-semibold'>
                            Proviralz Blog
                        </p>
                    </div>
                    <div>
                        <p className=' text-center text-xs font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br /> quis nostrud exerci
                        </p>
                    </div>
                    <div>
                        Posts
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Blog