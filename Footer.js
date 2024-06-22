import React from 'react'
import { adobeLogo } from '../Data'
const Footer = () => {
    return (
        <section className='px-4 py-3 fixed w-full bottom-0 bg-white'>
            <div className="container-fluid ">
                {/* left side */}
                <div className="grid lg:grid-cols-2 gap-3 items-center ">
                <div className="left-foot">
                    <ul className='flex items-center '>
                        <li className='mx- font-medium text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">More Behance |</a></li>
                        <li className='mx-3 font-medium text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">Englsih |</a></li>
                        <li className='mx-3 font-medium text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">Try Behnace PRO|</a></li>
                        <li className='mx-3 font-medium text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">TOU Privacy Community Help Cookie preference</a></li>
                        <li className='mx-3 font-medium text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">Do Not sell or share any personal information</a></li>
                    </ul>
                </div>

                <div className="adobe-right flex lg:justify-end">
                    <div className="adobe-btn mx-4 flex items-center hover:opacity-70">
                        <img src={adobeLogo} alt={adobeLogo} className="w-5 h-5" />
                        <a href="" className='pl-1 font-bold text-black text-sm'> Adobe</a>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Footer