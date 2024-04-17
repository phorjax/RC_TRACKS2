"use client"
import Image from 'next/image';
import rc_logo from '../../../public/rc_logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import SmoothScrollLink from '../scrolling/scrolling';

export default function NavBar() {

    return (
        <>
            <div className="navbar bg-base-100 px-12 fixed top-0 z-50">
                <div className="navbar-start">
                    <div id='NavBarLogo' className="flex items-center">
                        <Image src={rc_logo} alt="RC logo" className='w-24' />
                        <span className="ml-2 text-3xl">RC TRACKS</span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-3">
                        <li className='px-6'><SmoothScrollLink href="#servicios">Servicios</SmoothScrollLink></li>
                        <li className='px-6'><SmoothScrollLink href="#tracks">Tracks</SmoothScrollLink></li>
                        <li className='px-6'><SmoothScrollLink href="#locaciones">Locaciones</SmoothScrollLink></li>
                        <li className='px-6'><SmoothScrollLink href="#contactenos">Contactenos</SmoothScrollLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://www.instagram.com/rc_tracks/' className="btn"><InstagramIcon /></a>
                </div>
            </div>
        </>
    )
}