import { useEffect, useState } from 'react';
import ApplicationLayout from './layouts/application-layout';
import Home from './views/home-page/home';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase/firebase';
import type { userInfo } from '@utils/types/user.type';
import LoadingView from './views/loading-page/loading-view';
import { useApplicationView } from './context/ApplicationViewContext';
import { applicationView } from './utils/enums/enums';
import About from '@views/about-page/about';
import SkillView from '@views/skill-page/skill';

function App() {
const [userData, setUserData] = useState<userInfo | null>(null);
const [isLoading, setIsLoading] = useState<boolean>(true);
const { currentView } = useApplicationView();

useEffect(() => {
  const fetchData = async () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    const userSnapshot = await getDoc(doc(db, "users", 'glVfh9uyZ2UQBz901DYc'));
    if (userSnapshot.exists()) {
      setUserData(userSnapshot.data() as userInfo);
    } else {
      console.log("No such document!");
    }
  };
 
  fetchData();
},[])

const getApplicationView = (): typeof applicationView => {
        return applicationView;
    }

//write a object literation function for current view
const renderCurrentView = () => {
  switch (currentView) {
    case getApplicationView().Home:
      return userData && <Home userData={userData} />;
    case getApplicationView().AboutUs:
      return  userData && <About userData={userData} />;
    case getApplicationView().Skills:
      return userData && <SkillView  userData={userData} />;
    default:
      return <div className='coming-soon-section'> <h1 className='colorGradient'>Coming Soon...</h1></div>;
  }
};

return (
<>
   {isLoading ? <LoadingView /> : 
       <ApplicationLayout>
           {renderCurrentView()}
       </ApplicationLayout>
   }
</>
);

}

export default App
