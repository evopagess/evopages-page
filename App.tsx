import React, { Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Lazy load components that are below the fold to reduce initial bundle size
// This significantly improves TBT (Total Blocking Time) and FCP (First Contentful Paint)
const SocialProof = React.lazy(() => import('./components/SocialProof').then(module => ({ default: module.SocialProof })));
const PainPoints = React.lazy(() => import('./components/PainPoints').then(module => ({ default: module.PainPoints })));
const Solution = React.lazy(() => import('./components/Solution').then(module => ({ default: module.Solution })));
const Portfolio = React.lazy(() => import('./components/Portfolio').then(module => ({ default: module.Portfolio })));
const LeadForm = React.lazy(() => import('./components/LeadForm').then(module => ({ default: module.LeadForm })));
const Footer = React.lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-zinc-500 selection:text-white overflow-x-hidden">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        {/* Suspense allows the initial UI to load while these chunks are fetched */}
        <Suspense fallback={<div className="h-24 w-full bg-black" />}>
          <SocialProof />
          <PainPoints />
          <Solution />
          <Portfolio />
          <LeadForm />
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}

export default App;