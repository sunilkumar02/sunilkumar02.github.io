import BannerImage from '@components/banner-image';
import TabPill from '@components/tab-pill/tab-pill'
import {Button} from '@components/button'
import './home.css';
import type { userInfo } from '../../types/user.type';

const Home = ({userData}: {userData: userInfo}) => {
  return (
    <>
    <div className="bannersection-outer">
      <div className='banner-section-inner'>

        <div className="banner-image-outer">
          <BannerImage src={userData.profile_url} label={userData.first_name} />
        </div>

        <div className='banner-content-outer'>
          <TabPill label='Available to work' pillType="notify"/>
          <h1>Hey, I'm <span className='highlight-text'>{userData.first_name} {userData.last_name}</span></h1>
          <h3>a Front-end Developer from Bengaluru.</h3>
          <p>I develop user-centric front-end solutions that harness technology to drive positive impact and enhance lives.</p>
          <div className='get-in-touch'>
              <Button onClick={() => console.log('Download Resume clicked')}>Download Resume</Button>
          </div>
        </div>
        </div>
    </div>
        
    </>
  )
}

export default Home;
