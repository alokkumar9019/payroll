import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemWeSolve from "@/components/ProblemWeSolve";
import HiddenCostSection from "@/components/HiddenCostSection";
import Footer from "@/components/Footer";
import Resources from "@/components/Resources";
import TestimonialsSection from "@/components/Testimonial";
import ComparisonTable from "@/components/ComparisonTable";
export default function Home() {
  return (
   <>
    <Header/>
    <Hero/>
    <ProblemWeSolve/>
    <HiddenCostSection/>
    <ComparisonTable/>
    <TestimonialsSection/>
    <Resources/>
    <Footer/>
   </>
  );
}
