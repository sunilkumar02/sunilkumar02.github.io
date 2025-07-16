import type { Skill } from '@utils/core.type';
import html5 from '../../assets/html-5.png';
import CSS from '../../assets/css.png';
import ReactLogo from '../../assets/react.png';
import Angular from '../../assets/angular.png';
import JS from '../../assets/js.png';
import WebDevelopent from "../../assets/web-development.png";
import wordpress from '../../assets/wordpress.png';
import './skill.css';  
import SkillCard from '../../components/skill-card/skill-card';

const skills:Skill[] = [
  {
    id: 1,
    title: "HTML5",
    imgUrl: html5
  },
  {
    id: 2,
    title: "CSS",
    imgUrl: CSS
  },
  {
    id: 3,
    title: "JavaScript",
    imgUrl: JS
  },
  {
    id: 4,
    title: "React",
    imgUrl: ReactLogo
  },
  {
    id: 5,
    title: "Angular",
    imgUrl: Angular
  },
  {
    id: 6,
    title: "Web Development",
    imgUrl: WebDevelopent
  },
  {
    id: 7,
    title: "WordPress",
    imgUrl: wordpress
  }
]

const SkillView: React.FC = () => {
  return (
    <>
    <div className='skill-section-outer dark-theme'>
            <div className="page-center">
                <div className="skill-section-inner">
                    <div className="section-header" data-num="02">
                        <h1 className="section-title fade-right">My Skills</h1>
                    </div>
                    <div className="skill-list">
                      {skills.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                      ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default SkillView;