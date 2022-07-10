import { createContext, useState } from 'react';

interface SideMenuContextState {
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (isOpen: boolean) => void;
}
export const SideMenuContext = createContext<SideMenuContextState>({
  isOpen: false,
  setIsOpen: () => {},
});

interface SideMenuProviderProps {
  children: React.ReactNode;
}
export const SideMenuProvider = ({ children }: SideMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SideMenuContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </SideMenuContext.Provider>
  );
};
