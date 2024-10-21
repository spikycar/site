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
              <p>I also an audio enthutiast, my listening gear only consits of one headphone and one earphone</p>
              <div className="row col-12 blahaj-info me-4">

                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="card m-2">
                    <div className="card-header">
                      Headphone
                    </div>
                    <div className="card-body">
                      <h4 className='fw-bold'>Grado SR60X</h4>
                      <ul>
                          <li>An openback headphone</li>
                          <li>Has good soundstage, in certain song, I can feel distance of instruments</li>
                          <li>It has bright sound characteristic, meaning it will has great detail on instrument like guitar, drum etc.</li>
                          <li><b>not great for usage in area that require you to be silent, the sound will leaked to the others due being open back</b></li>
                          <li>for me, this has natural voice.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="card m-2">
                    <div className="card-header">
                      Earphone
                    </div>
                    <div className="card-body">
                      <h4 className='fw-bold'>Salnotes 7hz Zero</h4>
                      <ul>
                          <li>A Chinese IEM (Chi-Fi)</li>
                          <li>Quite cheap, around $20 but it has quite well sound quality</li>
                          <li>This one is more balanced, it has bass that only enough to be noticable but not overwhelming</li>
                          <li>The soundstage isn't great, due to being an IEM, but you can still hear some sort of depth</li>
                          <li>Has quite good detail on instrument tho, and the vocals feels natural.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="card m-2">
                    <div className="card-header">
                      ...Another one?
                    </div>
                    <div className="card-body">
                      <h4 className='fw-bold'>Got idea what should i get?</h4>
                      <ul>
                          <li>Please don't give me beat by dre</li>
                          <li>or Apple products</li>
                          <li>make sure it's cheap (like CHI-FIs), so I can incorporate it into my gear without making me broke</li>
                          <li>just drop a link or maybe with explanation to my email/discord/bluesky DM, which I will post here :&gt; </li>
                      </ul>
                    </div>
                  </div>
                </div>

                </div>
              </div>
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
        
          <div>
            <Link href={"https://www.youtube.com/watch?v=hJW5XsPuTYQ"} title={"nice, you found this. click to see the gem"} style={{color: "white"}}>australian hidden gem</Link>
          </div>

      </div>
      <BottomBar/>
    </main>
  );
}
