import HomeAboutUs from "@/Components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/Components/HomePage/HomeDoctor/HomeDoctor";
import HomeFaq from "@/Components/HomePage/HomeFaq/HomeFaq";
import HomeHeader from "@/Components/HomePage/HomeHeader/HomeHeader";
import HomeKey from "@/Components/HomePage/HomeKey/HomeKey";
import HomeService from "@/Components/HomePage/HomeService/HomeService";
import HomeTestimonial from "@/Components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/Components/HomePage/HomeWhy/HomeWhy";

export default function Homepage() {
  return (
    <div>
      <HomeHeader />
      <HomeAboutUs />
      <HomeService />
      <HomeKey />
      <HomeWhy />
      <HomeDoctor />
      <HomeFaq />
      <HomeTestimonial />
    </div>
  );
}
