import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './loading-view.css'

const LoadingView = () => {
  return (
    <div className="loading-page">
        <div className="infoIcons">
            <FontAwesomeIcon icon={faCode} className="fadeDown" style={{ animationDelay: '0.2s' }}/>
            <FontAwesomeIcon icon={faUser} className="fadeDown" style={{ animationDelay: '0.4s' }}/>
            <FontAwesomeIcon icon={faGithub} className="fadeDown" style={{ animationDelay: '0.6s' }}/>
        </div>
      <h1 className="fadeLeft">Welcome To My</h1>
      <h1 className="colorGradient fadeUp">Portfolio Website</h1>
      <p className="colorGradient typewriter">https://sunilkumar02.github.io/</p>
    </div>
  );
};
export default LoadingView;