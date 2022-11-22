import ParticlesBg from "particles-bg";
import { BsInstagram, BsGithub, BsYoutube } from 'react-icons/bs' ;
import { FaTiktok } from 'react-icons/fa' ;
import './App.css';

function App() {
  return (
    <div >
      <div className="card">
        <div className="card_body">
          <div className="profile text-center">
            <img src="/profile.jpg" className="avatar"/>
            <div className="bg_content rd_12 p_8">
              <h1>Raihan</h1>
              <p>Student</p>
              <p>SMK Media Informatika Jakarta</p>
            </div>
          </div>
          <div className="mt-16">
            <a href="https://www.instagram.com/official_playergames/?hl=id" className="btn_action bg_content"> 
              <BsInstagram/>             
              <span>Instagram</span> 
            </a>
          </div>
          <div className="mt-16">
            <a href="https://www.tiktok.com/@siapa_diriku08" className="btn_action bg_content"> 
              <FaTiktok/>             
              <span>Tiktok</span> 
            </a>
          </div>
          <div className="mt-16">
            <a href="https://www.youtube.com/channel/UC1x2pY3Dj2X5YHHOW_gt3-g" className="btn_action bg_content"> 
              <BsYoutube/>             
              <span>Youtube</span> 
            </a>
          </div>
          <div className="mt-16">
            <a href="https://github.com/Davidcatch?tab=repositories" className="btn_action bg_content"> 
              <BsGithub/>             
              <span>GitHub</span> 
            </a>
          </div>
        </div>
      </div>
     <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
