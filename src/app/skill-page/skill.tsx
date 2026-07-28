import type { Skill } from '@utils/types/core.type';
import SkillCard from '../../components/skill-card/skill-card';
import type { userInfo } from '@utils/types/user.type';
import SectionCard from '@layouts/section-card';
import GridLayout from '@layouts/grid-layout';
import Headline from '@components/headline/headline';
import { HeadlineType, TextAlignment } from '@utils/enums/enums';
import { HTML, Angular, CSS, Javascript, React, Typescript, Hubspot, Lit, Wordpress } from "@assets/index";
import { useEffect, useState } from 'react';


const SkillView = ({userData}: {userData: userInfo}) => {

  const [skills, setSkills] = useState<Skill[]>([])

  const skillLogos:Record<string, string> = {
    React,
    Angular,
    HTML,
    CSS,
    Javascript,
    Typescript,
    Hubspot,
    Lit,
    Wordpress
  }

  useEffect(() => {
    const skillsList:Skill[] = userData.skills.map((skill: string, index: number) => {
      return {
        id: index,
        title: skill,
        imgUrl: skillLogos[skill]
      }
    })

    setSkills(skillsList);

  },[])
  
  return (
    <>
      <SectionCard className='fadeUp'>

        <GridLayout>
          
          <div className='skill-section-outer'>

            <Headline title='My Skills' subTitle='my skills'  aligment={TextAlignment.Center} type={HeadlineType.Overlay}/>

            <div className="skill-list">
                {skills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>

          </div>

        </GridLayout>

      </SectionCard>
    
    </>
  );
}

export default SkillView;