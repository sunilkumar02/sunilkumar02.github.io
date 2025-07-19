import { createContext, useContext, useState } from "react";
import { applicationView } from "../utils/enums/enums";

// You can extend this type with more fields if needed
export interface ApplicationViewContextType {
  currentView: applicationView;
  setView: (view: applicationView) => void;
  resetView: () => void;
}

export const ApplicationViewContext = createContext<ApplicationViewContextType | undefined>(undefined);


export const ApplicationViewProvider = ({ children }: { children: React.ReactNode }) => {

  const [currentView, setCurrentView] = useState<applicationView>(applicationView.Home);

  const setView = (view: applicationView) => {
    setCurrentView(view);
  };

  const resetView = () => {
    setCurrentView(applicationView.Home);
  };

  return (
    <ApplicationViewContext.Provider value={{ currentView, setView, resetView }}>
      {children}
    </ApplicationViewContext.Provider>
  );
};


// Custom hook for consuming the context
export const useApplicationView = (): ApplicationViewContextType => {
  const context = useContext(ApplicationViewContext);
  if (!context) {
    throw new Error('useApplicationView must be used within an ApplicationViewProvider');
  }
  return context;
};
