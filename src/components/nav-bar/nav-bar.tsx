import { faHouseChimney, faPaperPlane, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import './nav-bar.css';
import TabPill from '@components/tab-pill/tab-pill';
import { useEffect, useState } from 'react';
import { useApplicationView,  } from '../../context/ApplicationViewContext';
import { applicationView } from '../../utils/enums/enums';

const NavBar = () => {
    const [menuHeight, setMenuHeight] = useState(0);
    const [activeTab, setActiveTab] = useState('Home');
    const { setView } = useApplicationView();

    useEffect(() => {
        setMenuHeight(_getMenuHeight());
     },[]);

    const _getMenuHeight = () => {
        const menuItems = document.querySelector('.nav-bar-outer');
        return menuItems ? menuItems.scrollHeight : 0;
    };

    const _handleTabClick = (tabName: applicationView) => {
        setActiveTab(tabName);
        setView(tabName);
    };

    const getApplicationView = (): typeof applicationView => {
        return applicationView;
    }

    return(
        <>
        <div className="nav-bar-outer" style={{ top: `calc(50% - ${menuHeight/2}px)` }}>
            <div className="menuItems">

                <TabPill 
                    label={getApplicationView().Home} 
                    pillType='tab' 
                    icon={faHouseChimney} 
                    isActive={activeTab === getApplicationView().Home} 
                    onTabClick={() => _handleTabClick(getApplicationView().Home)}/>
                <TabPill 
                    label={getApplicationView().AboutUs} 
                    pillType='tab' 
                    icon={faUser} 
                    isActive={activeTab === getApplicationView().AboutUs} 
                    onTabClick={() => _handleTabClick(getApplicationView().AboutUs)}/>
                <TabPill 
                    label={getApplicationView().Skills} 
                    pillType='tab' 
                    icon={faUserGraduate} 
                    isActive={activeTab === getApplicationView().Skills} 
                    onTabClick={() => _handleTabClick(getApplicationView().Skills)}/>
                <TabPill 
                    label={getApplicationView().Contact} 
                    pillType='tab' 
                    icon={faPaperPlane} 
                    isActive={activeTab === getApplicationView().Contact} 
                    onTabClick={() => _handleTabClick(getApplicationView().Contact)}/>

            </div>
        </div>
        </>
    )
}

export default NavBar;