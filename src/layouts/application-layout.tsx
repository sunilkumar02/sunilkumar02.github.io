
import NavBar from "../components/nav-bar/nav-bar";
import '@styles/layout.css'

//design a layout component
interface ApplicationLayoutProps {
    className?: string;
    styles?: React.CSSProperties;
    children: React.ReactNode;
}

const ApplicationLayout:React.FC<ApplicationLayoutProps> = ({children, className, styles}) => {
    return (
        <div className={`app-layout ${className}`} style={styles}>
            <header className="app-header">
                <NavBar />
            </header>
            <main className="app-main">
                {children}
            </main>
        </div>
    );
};

export default ApplicationLayout;
