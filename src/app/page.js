import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemWeSolve from "@/components/ProblemWeSolve";
import HiddenCostSection from "@/components/HiddenCostSection";
import Footer from "@/components/Footer";
import Resources from "@/components/Resources";
import TestimonialsSection from "@/components/Testimonial";
import ComparisonTable from "@/components/ComparisonTable";
import BusinessImpact from "@/components/BusinessImpact";
import FeatureExplorer from "@/components/Features";
import SuiteCapabilitiesSection from "@/components/Suite";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProvenResults from "@/components/ProvenResults";
import PayrollROICalculator from "@/components/Roi";
import DemoSection from "@/components/SeeInAction";
export default function Home() {
  return (
   <>
    <Header/>
    <Hero/>
    <ProblemWeSolve/>
    <HiddenCostSection/>
    <SuiteCapabilitiesSection/>
    <DemoSection/>
    <BusinessImpact/>
    <ComparisonTable/>
    <FeatureExplorer/>
    <ProvenResults/>
    <WhyChooseUs/>
    <PayrollROICalculator/>
    <TestimonialsSection/>
    <Resources/>
    <Footer/>
   </>
  );
}
