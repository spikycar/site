import Link from 'next/link';
import Image from 'next/image';
import Navbar from './component/navbar';

import BottomBar from './component/bottom';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="container my-5 stage">
          <div className=''>
            <div className="d-flex justify-content-between">
            <h1 className="h6 fw-bolder">--about me 🙋</h1>
            </div>
            <div className='content'>
              <p>Stranger in the internet, some fact about me</p>
              <ul>
                <li>20 (Gen-Z)</li>
                <li><s>IT</s> Computer Science student</li>
                <li>interested on cybersecurity now</li>
                <li>I have blahaj</li>
              </ul>
            </div>
          </div>

          <div>
            <Link href={"https://www.youtube.com/watch?v=hJW5XsPuTYQ"} title={"nice, you found this. click to see the gem"} style={{color: "white"}}>australian hidden gem</Link>
          </div>

          <div className='mt-4'>
            <h2 className='h6 fw-bolder content-title'>--contact me</h2>
            <ul>
              <li>
                <Link href={'#'}>Linkedin</Link>
              </li>
              <li>
                <Link href={'#'}>Bluesky</Link>
              </li>
              <li>
                <Link href={'https://github.com/spikycar'}>Github</Link>
              </li>
            </ul>
          </div>
        
      </div>
      <BottomBar/>
    </main>
  );
}
