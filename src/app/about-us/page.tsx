import AboutUsHeader from "@/Components/AboutUs/AboutUsHeader";
import HomeAboutUs from "@/Components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/Components/HomePage/HomeDoctor/HomeDoctor";
import HomeWhy from "@/Components/HomePage/HomeWhy/HomeWhy";

export default function AboutUsPage() {
  return (
    <div>
      <AboutUsHeader />
      <HomeAboutUs />
      <HomeDoctor />
      <HomeWhy />
    </div>
  );
}
