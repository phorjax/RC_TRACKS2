import logo from '../../../public/rc_logo.png'
import Image from "next/image";
import InstagramIcon from '@mui/icons-material/Instagram';




export default function Footer() {

    return (
        <footer className="footer items-center p-4 text-black">
            <aside className="items-center grid-flow-col">
                <Image src={logo} className='w-20' alt=""  />
                <p>Copyright © 2024 - All rights reserved</p>
            </aside>
            <nav className="grid-flow-col mx-5 gap-4 md:place-self-center md:justify-self-end">
            <a href='https://www.instagram.com/rc_tracks/'><InstagramIcon /></a> <p> @rc_tracks</p>
            </nav>
        </footer>
    )
}