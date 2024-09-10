// Home.jsx
import Image from 'next/image';
import { HeroSection } from './components/HeroSection';
import { NavBar } from './components/NavBar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import FooterSection from './components/FooterSection'; // Import the FooterSection component

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection /> 
        <AboutSection style={{ marginTop: '50px' }} />
        <ProjectsSection />
      </div>
      <FooterSection /> {/* Add the FooterSection component here */}
    </main>
  );
}
