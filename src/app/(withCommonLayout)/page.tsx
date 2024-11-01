import ContactSection from "@/components/ContactUs/ContactUs";
import GetFeaturedTravel from "@/components/GetFeaturedTravel/GetFeaturedTravel";
import RecentPostTravel from "@/components/GetFeaturedTravel/RecentPostTravel/RecentPostTravel";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import KnowAboutUs from "@/components/KnowAboutUs/KnowAboutUs";
import OfferCards from "@/components/OfferCards/OfferCards";
import SubscriptionSection from "@/components/Subscription/SubscriptionSection";
import Banner from "../(withDashboardLayout)/dashboard/user/my-trip/components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <RecentPostTravel />
      <OfferCards />
      <GetFeaturedTravel />
      <KnowAboutUs />
      <ImageGallery />
      <SubscriptionSection />
      <ContactSection />
    </div>
  );
};

export default Home;
