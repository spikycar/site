import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand fw-bolder">
            <img src="/shark.png" width={50} /> spikycat<sup className="text-muted">(they/he)</sup>
          </a>
          <ul className="nav flex-grow-1 justify-content-end">
            <li className="nav-item ms-2">
              <a href="#" className="btn btn-sm">
                about
              </a>
            </li>
            <li className="nav-item ms-2">
              <a href="https://github.com/fyescha" target="_blank" className="btn btn-sm">
                github
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="mt-5">
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

            <div className="row col-12">

            <div className="col-6">
              <div className="card m-2">
                <div className="card-header">
                  common Blåhaj appearance
                </div>
                <div className="card-body text-center">
                  <img src="/shark.png" />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="card m-2">
                <div className="card-header">
                  anatomy of a Blåhaj
                </div>
                <div className="card-body text-center">
                  <img src="/shark_diagram.jpg" />
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
      </div>
    </main>
  );
}
