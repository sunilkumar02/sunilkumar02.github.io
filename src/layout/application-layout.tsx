
import NavBar from "../components/nav-bar/nav-bar";
import style from './application-layout.module.css'

//design a layout component
interface ApplicationLayoutProps {
    children: React.ReactNode;
}

const ApplicationLayout:React.FC<ApplicationLayoutProps> = ({children}) => {
    return (
        <div className={style['app-layout']}>
            <header className="app-header">
                <NavBar />
            </header>
            <main className={style['app-main']}>
                {children}
            </main>
        </div>
    );
};

export default ApplicationLayout;
