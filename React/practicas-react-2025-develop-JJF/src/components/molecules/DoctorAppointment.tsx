import Icon from "../atoms/Icon";

export function DoctorAppointment(img: string, drName: string, phoneNumber: string) {
  return (
    <>
    <div>
      <Icon name={img} className="img_doctor" />
      <div className="dr_name">
        <h1>{drName}</h1>
        <p>{phoneNumber}</p>
      </div>
    </div>
    </>
    
  );
}