import Image from 'next/image';
import rc_logo from '../../../public/rc_logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';

export default function NavBar() {

    return (
        <>
            <div className="navbar bg-base-100 px-12">
                <div className="navbar-start">
                    <div id='NavBarLogo' className="flex items-center">
                        <Image src={rc_logo} alt="RC logo" className='w-24' />
                        <span className="ml-2 text-3xl">RC TRACKS</span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-3">
                        <li className='px-6'><a className='text-xl'>Servicios</a></li>
                        <li className='px-6'><a className='text-xl'>Tracks</a></li>
                        <li className='px-6'><a className='text-xl'>Locaciones</a></li>
                        <li className='px-6'><a className='text-xl'>Contactenos</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn"><InstagramIcon /></a>
                </div>
            </div>
        </>
    )
}