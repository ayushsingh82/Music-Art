import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChoose from "@/components/WhyChoose";
import MusicScoolTestimonials from "@/components/TestimonialCards";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased
    bg-grid-white/[0.02">
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChoose/>
    <MusicScoolTestimonials/>
    </main>
  );
}
