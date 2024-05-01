import React from 'react'

const ServiceCard = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='w-[80%]  gap-4 flex justify-center items-center '>
            <div className='m-auto'>
                <div className='flex flex-col gap-4 w-[70%]'>
                    <h1 className='text-3xl font-bold mx-auto'>TITLE</h1>
                    <p className='text-lg'>Cursus elit, iaculis platea integer sapien chivo egestas. Bitae donec ornare iaculis mauris nec ultrices ligula dolor ullamcorper tempus dignissim, sed at acumin.</p>
                </div>
            </div>
            <div className='w-[60%]'>
                <img src='https://cdn.easyfrontend.com/pictures/testimonial/testimonial_19.png' alt='Service' />
            </div>
        </div>
    </div>
  )
}

export default ServiceCard