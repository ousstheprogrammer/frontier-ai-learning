import { ReactNode } from "react";

interface ContentSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const ContentSection = ({ id, title, children }: ContentSectionProps) => {
  return (
    <section id={id} className="mb-20">
      <h2 className="mb-8">{title}</h2>
      <div className="font-serif text-foreground leading-[1.8] space-y-6">
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
