import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Navigation, SectionDots } from './components/Navigation.jsx';
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  TechnologiesSection,
} from './components/Sections.jsx';

const sectionComponents = [
  HeroSection,
  AboutSection,
  TechnologiesSection,
  ProjectsSection,
  ContactSection,
];

export default function App() {
  const mainRef = useRef(null);
  const [active, setActive] = useState(0);

  const navigate = useCallback((index) => {
    const main = mainRef.current;
    if (!main) return;

    const realSections = main.querySelectorAll('[data-real="true"]');
    const lastClone = main.querySelector('[data-clone="last"]');
    if (!realSections[index] || !lastClone) return;

    const cloneHeight = lastClone.offsetHeight;
    const previousSectionsHeight = Array.from(realSections)
      .slice(0, index)
      .reduce((sum, section) => sum + section.offsetHeight, 0);

    window.scrollTo({
      top: cloneHeight + previousSectionsHeight,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return undefined;

    const sections = Array.from(main.querySelectorAll('[data-real="true"]'));
    const firstClone = main.querySelector('[data-clone="first"]');
    const lastClone = main.querySelector('[data-clone="last"]');
    if (!firstClone || !lastClone || sections.length === 0) return undefined;

    const totalSectionsHeight = () =>
      sections.reduce((sum, section) => sum + section.offsetHeight, 0);

    let scheduled = false;
    const updateScrollState = () => {
      scheduled = false;
      const start = lastClone.offsetHeight;
      const length = totalSectionsHeight();

      if (window.scrollY >= start + length) {
        window.scrollTo(0, window.scrollY - length);
        return;
      }
      if (window.scrollY < start - 1) {
        window.scrollTo(0, window.scrollY + length);
        return;
      }

      const viewportMiddle = window.scrollY - start + window.innerHeight / 2;
      let sectionOffset = 0;
      sections.forEach((section, index) => {
        if (viewportMiddle >= sectionOffset) setActive(index);
        sectionOffset += section.offsetHeight;
      });
    };

    const handleScroll = () => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(updateScrollState);
    };

    window.history.scrollRestoration = 'manual';
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    window.addEventListener('load', handleScroll);
    window.scrollTo(0, lastClone.offsetHeight);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  const LastSection = sectionComponents[sectionComponents.length - 1];
  const FirstSection = sectionComponents[0];

  return (
    <>
      <Navigation active={active} onNavigate={navigate} />
      <SectionDots active={active} onNavigate={navigate} />
      <main ref={mainRef}>
        <LastSection clone data-clone="last" />
        {sectionComponents.map((SectionComponent, index) => (
          <SectionComponent key={index} data-real="true" />
        ))}
        <FirstSection clone data-clone="first" />
      </main>
    </>
  );
}
