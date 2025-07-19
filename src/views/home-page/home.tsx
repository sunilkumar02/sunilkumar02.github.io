import BannerImage from '@components/banner-image';
import TabPill from '@components/tab-pill/tab-pill'
import { Button } from '@components/button'
import type { userInfo } from '@utils/types/user.type';
import GridLayout from '@layouts/grid-layout';
import { GridTemplateColumns } from '@utils/enums/enums';
import SectionCard from '@layouts/section-card';

const Home = ({userData}: {userData: userInfo}) => {
  return (
    <>
      <SectionCard className='fadeUp'>

        <GridLayout gridColumns={GridTemplateColumns['one-third']}>

          <BannerImage src={userData.profile_url} label={userData.first_name} className='fadeIn' />

          <div className='banner-content-outer'>

            <TabPill label='Available to work' pillType="notify" className='gelatine' />
            <h1>Hey, I'm <span className='highlight-text'>{userData.first_name} {userData.last_name}</span></h1>
            <h3>a {userData.role} from {userData.base_location}.</h3>
            <p>I develop user-centric front-end solutions that harness technology to drive positive impact and enhance lives.</p>
            <Button className='mt-8' onClick={() => console.log('Download Resume clicked')}>Download Resume</Button>

          </div>

        </GridLayout>

      </SectionCard>
    </>
  )
}

export default Home;
