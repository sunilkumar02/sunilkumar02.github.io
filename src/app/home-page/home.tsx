import { ProfileHero } from '../../features/porfile';
import type { userInfo } from '@utils/types/user.type';

const Home = ({ userData }: { userData: userInfo }) => <ProfileHero userData={userData} />;

export default Home;
