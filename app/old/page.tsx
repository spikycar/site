import Link from 'next/link';
import Image from 'next/image';

import Navbar from '../component/navbar';
import BottomBar from '../component/bottom';

export default function Home() {
  return (
    <main className='container py-3'>
      <Navbar/>
      
      <div className="container my-5 stage">
        <div>
          <div className="d-flex justify-content-between">
          <h1 className="h5 fw-bolder">hello<sup>👋</sup></h1>
          </div>
          <p>this page still under construction. let's talk about blåhaj</p>
        </div>
        
        <div className="mt-4">
          <h2 className="h6 fw-bolder content-title">--what's Blåhaj</h2>
          <div className="content">
          Blåhaj  (stylized BLÅHAJ, lit 'blue shark') is a plush toy manufactured and sold by the Swedish company IKEA. Modeled after a blue shark and made of recycled polyester, the toy has gained prominence on social media as a popular internet meme, especially in the transgender community, and has also been used as a mascot by IKEA in some regions.
          </div>
        </div>
        
        <div className="mt-4">
          <h2 className="h6 fw-bolder content-title">--identifying a Blåhaj</h2>
          <div className="content">

            <div className="row col-12 blahaj-info me-4">

            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="card m-2">
                <div className="card-header">
                  common Blåhaj appearance
                </div>
                <div className="card-body text-center">
                  <Image className='img' alt={"shark"} height={0} width={0} sizes='100vw' src="/shark.jpg" />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="card m-2">
                <div className="card-header">
                  anatomy of a Blåhaj
                </div>
                <div className="card-body text-center">
                  <Image height={0} width={0} sizes='100vw' className='img' alt={"shark diagram"} src="/shark_diagram.jpg" />
                </div>
                <div className="card-footer">
                  <span className="text-muted">
                    thank you <Link href="https://www.reddit.com/r/BLAHAJ/comments/y575gl/guide_for_the_bl%C3%A5haj/">u/QuyT1 on reddit!</Link>
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
              <h2 className="h6 fw-bolder content-title">--why you should choose blahaj</h2>
              <div className="content">
                <table className="table mt-3">
                  <thead>
                    <tr>
                      <th scope="col">Blahaj</th>
                      <th scope="col">The other plushies</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td scope="row">Soft as fuck</td>
                    <td scope="row">Depends on the plushie, usually not very soft</td>
                  </tr>
                  <tr>
                    <td scope="row">Huggable</td>
                    <td scope="row">Most Plushies aren't huggable</td>
                  </tr>
                  <tr>
                    <td scope="row">Has cute as fuck eyes</td>
                    <td scope="row">Many plushie has wierd eyes</td>
                  </tr>
                  <tr>
                    <td scope="row">Can protect you from criminals if they afraid of shark</td>
                    <td scope="row">Many plushies aren't shark-shaped</td>
                  </tr>
                  </tbody>
                </table>
              </div>
        </div>

        <div className="mt-4">
          <h2 className="h6 fw-bolder content-title">--how to obtain one?</h2>
          <div className="content">
            <ul>
            <li>Getting them from IKEA, <Link href="https://blahaj.quest/">use this as reference</Link></li>
            <li>Getting them from big online store like Amazon</li>
            <li><Link href="https://www.reddit.com/r/BLAHAJ/comments/13fu9pp/theres_a_blahaj_at_my_goodwill/">Charity store like Goodwill</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <BottomBar/>
    </main>
  );
}
