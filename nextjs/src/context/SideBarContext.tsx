import { createContext, useState } from 'react';

type SidebarContextType = {
  isCollapsed: boolean;
  toggleSidebarcollapse: () => void;
};

const initialValue = { isCollapsed: false, toggleSidebarcollapse: () => {} };

const SidebarContext = createContext<SidebarContextType>(initialValue);

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setCollapse] = useState(false);

  const toggleSidebarcollapse = () => {
    setCollapse(prevState => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebarcollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
