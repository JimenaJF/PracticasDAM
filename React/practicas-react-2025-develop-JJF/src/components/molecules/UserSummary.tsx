import { IMAGES } from "@/assets/dictionaryImg";
import Icon from '../atoms/Icon';

export default function UserSummary() {

  return (
   
    <header>
    
      <Icon name="logo_easy_connect_SBS" className="logo" />
      <div className="header_right">

        <img src={IMAGES.senior} className="client" />

        <div className="ellipse">
          <img src={IMAGES.ellipse_1} />
          <p>6</p>
        </div>

        <div className="client_name">Cordelia Carpenter</div>

        <div className="settings">
          <Icon name="config" className="config" />
          <div className="sett_letters">SETTINGS</div>
        </div>

        <img src={IMAGES.dot3} className="dots" />

        <div className="logout">
          <Icon name="img_1419365876_on_off" className="on_off" />
          <div className="log_letters">LOGOUT</div>
        </div>

      </div>
    </header>
  );

  
}