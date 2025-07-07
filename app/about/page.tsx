import Link from 'next/link';
import Image from 'next/image';
import Navbar from './../component/navbar';

import BottomBar from './../component/bottom';

export default function About() {
  return (
    <main className='container py-0'>
      <Navbar/>
      <div className="my-3 stage">
          <div className=''>
            <div className='content'>

              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-12 my-3">
                <div className="row gy-3">
                  
                  <div className="col-md-6 col-sm-12">
                    <div className="card">
                      <div className="card-header">
                      </div>
                      <div className="card-body"></div>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="card">
                      <div className="card-header">
                      </div>
                      <div className="card-body"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
      <BottomBar/>
    </main>
  );
}