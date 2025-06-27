import './contact.css';
import Computer from '../../assets/computer.png';
import TelePhone from '../../assets/telephone.png';
import User from '../../assets/user.png';

const Contact: React.FC = () => {
    return (
        <>
        <div className='contact-section-outer dark-theme'>
            <div className="page-center">
                <div className="contact-section-inner">
                    <div className="section-header" data-num="03">
                        <h1 className="section-title fade-right">Get In Touch</h1>
                    </div>
                    <div className="contact-content">
                        <h2>Feel free to Contact Me!</h2>
                        <p className='zoom-in-up'>I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!</p>
                    </div>
                    <div className="contact-list">
                        <div className="contact-card fade-in-up" style={{animationDelay: `${1 * 200}ms`}}>
                            <div className="card-image">
                                <img src={Computer} alt="Computer" />
                            </div>
                            <div className="card-discription">
                                <h3>Email</h3>
                                <a href="mailto:sunil@example.com">sunil@example.com</a>
                            </div>
                        </div>
                        <div className="contact-card fade-in-up" style={{animationDelay: `${2 * 200}ms`}}>
                            <div className="card-image">
                                <img src={TelePhone} alt="Telephone" />
                            </div>
                            <div className="card-discription">
                                <h3>Phone</h3>
                                <a href="tel:+911234567890">+91 12345 67890</a>
                            </div>
                        </div>
                        <div className="contact-card fade-in-up" style={{animationDelay: `${3 * 200}ms`}}>
                            <div className="card-image">
                                <img src={User} alt="User" />
                            </div>
                            <div className="card-discription">
                                <h3>Social Network</h3>
                                <a href="https://www.linkedin.com/in/sunil">LinkedIn</a>
                                <a href="https://github.com/sunil">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;