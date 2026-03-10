interface FocusToggleProps {
  focused: boolean;
  onToggle: () => void;
}

const FocusToggle = ({ focused, onToggle }: FocusToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 right-8 z-50 w-5 h-5 rounded-full border border-border transition-all duration-300 hover:border-primary"
      style={{
        background: focused ? "hsl(0 0% 100%)" : "transparent",
      }}
      title={focused ? "Quitter le mode focus" : "Mode focus"}
      aria-label="Toggle focus mode"
    />
  );
};

export default FocusToggle;
