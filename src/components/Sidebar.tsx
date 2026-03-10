import { curriculum, Section } from "@/data/curriculum";

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Sidebar = ({ activeSection, onNavigate }: SidebarProps) => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-72 border-r border-border bg-sidebar overflow-y-auto py-12 px-8">
      <div className="mb-12">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Atelier Forêt Noire
        </p>
      </div>

      <ul className="space-y-8">
        {curriculum.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => onNavigate(section.id)}
              className={`nav-item block text-left mb-3 ${
                activeSection === section.id ? "nav-item-active" : ""
              }`}
            >
              {section.title}
            </button>
            {section.children && (
              <ul className="space-y-2 pl-3 border-l border-border">
                {section.children.map((child) => (
                  <li key={child.id}>
                    <button
                      onClick={() => onNavigate(child.id)}
                      className={`nav-item block text-left text-[11px] py-0.5 ${
                        activeSection === child.id ? "nav-item-active" : ""
                      }`}
                    >
                      {child.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
