import GridLayout from '../../layouts/grid-layout';
import { GridTemplateColumns } from '@utils/enums/enums';
import BannerImage from '@components/banner-image';
import type React from 'react';
import type { userInfo } from '@utils/types/user.type';
import { Button } from '@components/button';
import SectionCard from '@layouts/section-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMicrochip, faRocket } from '@fortawesome/free-solid-svg-icons';
import Headline from '@components/headline/headline';
import type { CoreStrength } from '../../utils/types/user.type';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { handleNavigationOrDownload } from '@utils/utilis';

const About: React.FC<{ userData: userInfo }> = ({ userData }) => {

    const logos: Record<string, IconProp> = {
        faLaptopCode,
        faMicrochip,
        faRocket
    }

    const navigateURL: string = 'https://www.linkedin.com/in/sunilkumarht/';

    return (
        <>
        <SectionCard className='fadeUp'>
            <GridLayout gridColumns={GridTemplateColumns['one-third']}>

                <BannerImage src={userData.profile_url} label='about' type='cover-banner'/>

                <div className='section-content-outer'>
                    <Headline title='About me' subTitle='discover'/>
                    <p>{userData.description}</p>
                    <Button className='mt-8' onClick={() => handleNavigationOrDownload(navigateURL)}>Get In Touch</Button>
                </div>

            </GridLayout>
            
            <GridLayout gridColumns={GridTemplateColumns['one-one-one']}>

                {userData.core_strength.map((strength: CoreStrength, index: number) => (
                        <div className="coreStrength" key={index}>
                            <FontAwesomeIcon icon={logos[strength.logo]} />
                            <h3 className='colorGradient'>{strength.title}</h3>
                            <p>{strength.description}</p>
                        </div>
                    )
                )}

            </GridLayout>

        </SectionCard>
        </>
    );
}

export default About;