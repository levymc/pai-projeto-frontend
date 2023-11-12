import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
  children: ReactNode;
}

interface AppContextValue {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  newPost: string;
  setNewPost: React.Dispatch<React.SetStateAction<string>>;
  openNewPost: string;
  setOpenNewPost: React.Dispatch<React.SetStateAction<string>>;
  logado: boolean;
  setLogado: React.Dispatch<React.SetStateAction<boolean>>;
  handleSavePost: (value: string) => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: AppContextProps) {
  const [newPost, setNewPost] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [openNewPost, setOpenNewPost] = useState<string>('aaaaaaaaaaaaaaaaaa');
  const [logado, setLogado] = useState<boolean>(false);

  const handleSavePost = (value: string) => {
    setNewPost(JSON.stringify(value));
  };

  const contextValue: AppContextValue = {
    value,
    setValue,
    newPost,
    setNewPost,
    handleSavePost,
    openNewPost,
    setOpenNewPost,
    logado,
    setLogado,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
