import { Input } from '@chakra-ui/react'
import React from 'react'
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si';

export default function FooterComponent() {
    return (
        <div className='bg-[#cd4c4c] text-white mt-10'>
            <div className='flex justify-around flex-col md:flex-row py-10'>
                <div className='space-y-2'>
                    <h1 className='font-bold'>VAN | SHOP</h1>
                    <p className='text-sm'>Dago No. 132, Bandung</p>
                    <p className='text-sm'>Open Hours (offline store)</p>
                    <p className='text-sm'>Mon-Sat, 7am - 9pm,</p>
                    <p className='text-sm'>Closed Sundays</p>
                </div>
                <div className='space-y-2'>
                    <h1 className='font-bold'>Contacts</h1>
                    <p className='text-sm'>support@mail.com</p>
                    <p className='text-sm'>+6281256233</p>
                    <div className='flex space-x-2 py-4'>
                        <SiInstagram className='w-5 h-auto' color='#ffff' />
                        <SiFacebook className='w-5 h-auto' color='ffff' />
                        <SiTwitter className='w-5 h-auto' color='#ffff' />
                        <SiLinkedin className='w-5 h-auto' color='#ffff' />
                    </div>
                </div>
                <div className='md:max-w-[25%] space-y-2'>
                    <h1 className='font-bold'>Subscribe</h1>
                    <p className='text-sm'>Subscribe to our newsletter and get updated
                        when there is a new product in our store</p>

                    <div className='flex gap-4'>
                        <Input placeholder='Email' className='placeholder:text-white'/>
                        <button className='bg-[#0e2538] text-white px-10 py-2'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}