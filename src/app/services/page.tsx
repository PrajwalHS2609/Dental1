import HomeAboutUs from "@/Components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/Components/HomePage/HomeDoctor/HomeDoctor";
import HomeWhy from "@/Components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "@/Components/Service/ServiceHeader";
import ServiceMain from "@/Components/Service/ServiceMain";

export default function ServicesPage() {
  return (
    <div>
      <ServiceHeader />
      <ServiceMain />
      <HomeAboutUs />
      <HomeDoctor />
      <HomeWhy />
    </div>
  );
}
