import { IMAGES } from "@/assets/dictionaryImg";

export  default function CardItem() {
  return (
    <div className="container">

      <div className="rectangle">
        <img src={IMAGES.rectangle_1} className="img_rectangle" />
      </div>
     
      <div className="card">

        <img src = {IMAGES.layer_2} className="layer" />
        <img src = {IMAGES.warnings_off2} className="img_item" />
        <div className="circle_test"> 
          1
        </div>
        <div>REMINDERS CALENDAR</div>
        <img src = {IMAGES.layer_3} className="layer_bottom"/>

      </div>
    

    </div>


  );
}