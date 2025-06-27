import BGImage from '../../assets/intro-bg.jpg'
import './home.css';

const Home = () => {
  return (
    <>
      <div className="intro-section outer light-theme">
        <div className='page-center'>
            <div className="intro-wrapper">
                <div className="intro-left">
                    <div className="intro-content">

                        <div className="text-pretitle">Hello</div>
                        <h1 className="text-title">
                            I'm Sunil Kumar <br />
                            a Front-end Developer <br />
                            base in Bengaluru.
                        </h1>                            

                        <div className="intro-content-btns">
                            <a className="btn" href="javascript:void(0)">More About Me</a>
                            <a className="btn is-outlined" href="javascript:void(0)">Get In Touch</a>
                        </div>

                    </div>
                </div>
                <div className="intro-right fade-in">
                    <img src={BGImage} alt="intro bg" />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home;
