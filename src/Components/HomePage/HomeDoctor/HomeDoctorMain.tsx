import React from "react";
import doctor from "@/Images/homeDoctor/doctor.png"
import Image from "next/image";
const HomeDoctorMain = () => {
  const service = [
    {
      id: 1,
      title: "Dr. Michael Reyes",
      description:
        "Pediatric Specialist",
      link: "",
      img: doctor,
    },
    {
      id: 2,
      title: "Dr. Michael Reyes",
      description:
        "Pediatric Specialist",
      link: "",
      img: doctor,
    },
    {
      id: 3,
      title: "Dr. Michael Reyes",
      description:
        "Pediatric Specialist",
      link: "",
      img: doctor,
    },
    {
      id: 4,
      title: "Dr. Michael Reyes",
      description:
        "Pediatric Specialist",
      link: "",
      img: doctor,
    },
  ];
  return (
    <div className="homeDoctorMain-container">
      {service.map((x) => (
        <div className="homeDoctorMain-cardContainer" key={x.id}>
          <Image src={x.img} alt={x.title} />
         <div className="homeDoctorMain-cover">
             <h5>{x.title}</h5>
          <p>{x.description}</p>
         </div>
        </div>
      ))}
    </div>
  );
};

export default HomeDoctorMain;
