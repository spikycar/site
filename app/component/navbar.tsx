import Link from 'next/link';
import Image from 'next/image';

export default function Navbar(){
    return <nav className="navbar">
    <div className="container">
      <Link href="/" className="navbar-brand fw-bold">
        <Image height={0} width={0} sizes='100vw' alt='logo of the website, which is a blahaj plushie' src="/logo.png" style={{width : "50px", height : "auto"}}/> spikycat<sup className="text-muted">(they/he)</sup>
      </Link>
      <ul className="nav flex-grow-1 justify-content-end">
      <li className="nav-item ms-2">
          <Link href='/notes' aria-disabled className="btn btn-sm">
            notes
          </Link>
      </li>
      <li className="nav-item ms-2">
          <Link href='/old' aria-disabled className="btn btn-sm">
            blahaj
          </Link>
      </li>
      <li className="nav-item ms-2" style={{display : "none"}}>
          <Link href='#' aria-disabled className="btn btn-sm">
            portofolio
          </Link>
      </li>
      </ul>
    </div>
  </nav>
}