import React from "react";
import "./HomeService.css";
import Image from "next/image";
import Link from "next/link";
import cosmeticDentistry from "@/Images/homeServices/cosmeticDentistry.png";
import generalDentistry from "@/Images/homeServices/generalDentistry.png";
import pediatricDentistry from "@/Images/homeServices/pediatricDentistry.png";
import restoreDentistry from "@/Images/homeServices/restoreDentistry.png";

const HomeServiceMain = () => {
  const service = [
    {
      id: 1,
      title: "Cosmetic Dentistry",
      description:
        "Enhance your smile’s beauty with whitening, veneers, and more.",
      link: "",
      logo: cosmeticDentistry,
    },
    {
      id: 2,
      title: "General Dentistry",
      description:
        "Complete oral care for every smile with cleanings, exams, and more.",
      link: "",
      logo: generalDentistry,
    },
    {
      id: 3,
      title: "Pediatric Dentistry",
      description:
        "Gentle and fun dental care for kids to grow healthy, happy smiles.",
      link: "",
      logo: pediatricDentistry,
    },
    {
      id: 4,
      title: "Restorative Dentistry",
      description:
        "Repair and restore your teeth for lasting comfort and function.",
      link: "",
      logo: restoreDentistry,
    },
  ];
  return (
    <div className="homeServiceMain-container">
      {service.map((x) => (
        <div className="homeServiceMain-cardContainer" key={x.id}>
          <Image src={x.logo} alt={x.title} />
          <h5>{x.title}</h5>
          <p>{x.description}</p>
          <button>
            <Link href={x.link}>Read More</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomeServiceMain;
