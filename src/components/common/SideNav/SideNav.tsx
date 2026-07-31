interface ISideNavProps {
  children: React.ReactNode;
  label?: string;
}

const SideNav = ({ children, label = 'Quick navigation links' }: ISideNavProps) => {
  return (
    <nav
      className="fixed right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col overflow-hidden rounded-full border border-semantic-line-rule bg-semantic-panel-bg-50 p-1.5 backdrop-blur-md lg:flex"
      aria-label={label}
    >
      {children}
    </nav>
  );
};

export default SideNav;
