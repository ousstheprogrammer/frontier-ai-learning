import { useState, useCallback, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import FocusToggle from "@/components/FocusToggle";
import NLPContent from "@/content/NLPContent";
import CVContent from "@/content/CVContent";

const Index = () => {
  const [focused, setFocused] = useState(false);
  const [activeSection, setActiveSection] = useState("nlp");

  const handleNavigate = useCallback((id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id], div[id]");
      let current = "nlp";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <FocusToggle focused={focused} onToggle={() => setFocused(!focused)} />

      <div
        className={`transition-all duration-300 ease-in-out ${
          focused ? "opacity-0 pointer-events-none -translate-x-full" : "opacity-100 translate-x-0"
        }`}
      >
        <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      </div>

      <main
        className={`transition-all duration-300 ease-in-out ${
          focused ? "ml-0 px-12 md:px-24 lg:px-40" : "ml-72 px-12 md:px-20"
        } py-12 max-w-4xl`}
      >
        <NLPContent />

        <div className="my-24">
          <div className="section-divider" />
          <div className="section-divider" />
        </div>

        <CVContent />

        <div className="h-40" />
      </main>
    </div>
  );
};

export default Index;
