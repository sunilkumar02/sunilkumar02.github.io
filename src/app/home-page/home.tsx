import {
  AboutSection,
  ContactSection,
  ProfileHero,
  SkillsSection,
} from '../../features/porfile';
import type { userInfo } from '@utils/types/user.type';

const Home = ({ userData }: { userData: userInfo }) => (
  <>
    <ProfileHero userData={userData} />
    <AboutSection userData={userData} />
    <SkillsSection userData={userData} />
    <ContactSection userData={userData} />
  </>
);

export default Home;
