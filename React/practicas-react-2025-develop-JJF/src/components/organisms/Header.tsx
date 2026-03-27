import Avatar from "../atoms/Avatar";
import Icon from "../atoms/Icon";
import Text from "../atoms/Text";
import LogoutButton from "../molecules/LogoutButton";
import NotificationDot from "../molecules/NotificationDot";
import SettingsButton from "../molecules/SettingButton";

export default function Header({valueNotification, clientName, textValueSettings, textLogoutButton }: 
  {valueNotification: number ; clientName: string; textValueSettings: string; textLogoutButton: string; }) {

  
 return (
    
  <>
  
    <header>
      <Icon name="logo_easy_connect_SBS" className="logo" />

      <div className="header_right">

        <Avatar name="senior" className="client" />
        
        <NotificationDot value={valueNotification}/>

        <Text className="client_name">{clientName}</Text>

        <SettingsButton text={textValueSettings} />

        <Icon name="dot3" className="dots" />

        <LogoutButton text={textLogoutButton} />

      </div>
      
    </header>
    <hr/>
    </>
   

  );

}
