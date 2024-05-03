import React from 'react'

const ServiceCard = ({number, service}) => {

    function isEven(number) {
        return number % 2 === 0;
    }


  return (
    <div className='w-full flex justify-center items-center m-4'>
    {isEven(number) ? 
    (<div className='w-[80%] p-4  gap-4 flex justify-center items-center '>
            <div className='m-auto  w-[30%]  flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center  gap-4'>
                    <h1 className='text-3xl font-bold font-[Manrope] text-center mx-auto'>{service.title}</h1>
                    <p className='text-sm font-thin font-[Manrope] text-center m-auto'>{service.text}</p>
                </div>
            </div>
            <div className='w-[70%] flex justify-end items-center  p-4'>
                <img src={service.image} alt='Service' />
            </div>
        </div>) : (<div className='w-[80%] p-4  gap-4 flex justify-center items-center '>
            <div className='w-[70%] flex justify-start items-center  p-4'>
                <img src={service.image} alt='Service' />
            </div>
            <div className='m-auto  w-[30%]  flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center  gap-4'>
                    <h1 className='text-3xl font-bold font-[Manrope] mx-auto text-center'>{service.title}</h1>
                    <p className='text-sm font-thin font-[Manrope] text-center'>{service.text}</p>
                </div>
            </div>
        </div>)}
        
        
    </div>
  )
}

export default ServiceCard