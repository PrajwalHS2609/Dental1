import React from "react";
import "./Service.css";
import Image from "next/image";
import cosmeticDentistry from "@/Images/homeServices/cosmeticDentistry.png";
import generalDentistry from "@/Images/homeServices/generalDentistry.png";
import pediatricDentistry from "@/Images/homeServices/pediatricDentistry.png";
import restoreDentistry from "@/Images/homeServices/restoreDentistry.png";
import orthodontics from "@/Images/homeServices/orthodontic.png";
import dividerImage1 from "@/Images/homeAbout/Img1.jpg"; // First divider image
import dividerImage2 from "@/Images/homeAbout/Img2.jpg"; // Second divider image
import Link from "next/link";

const ServiceMain = () => {
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
    {
      id: 5,
      title: "Orthodontics",
      description:
        "Straighten your teeth with braces or aligners for a confident smile.",
      link: "/",
      logo: orthodontics,
    },
  ];

  return (
    <div className="serviceMain-container">
      {service.map((x, index) => (
        <React.Fragment key={x.id}>
          <div className="serviceMain-cardContainer">
            <Image src={x.logo} alt={x.title} />
            <h5>{x.title}</h5>
            <p>{x.description}</p>
            <button>
              <Link href={x.link}>Read More</Link>
            </button>
          </div>

          {/* Insert divider after every 2 cards, except after last card */}
          {(index + 1) % 2 === 0 && index !== service.length - 1 && (
            <div className="serviceMain-cardContainer">
              <Image
                src={
                  ((index + 1) / 2) % 2 === 1 ? dividerImage1 : dividerImage2
                }
                alt="divider"
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ServiceMain;
