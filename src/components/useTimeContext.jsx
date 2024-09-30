import { createContext, useContext, useState } from 'react';

// Create the context
const MyContext = createContext();

// Create a custom hook to use the context
export const useMyContext = () => {
  return useContext(MyContext);
};

// Create a provider component to wrap around your app
export const MyProvider = ({ children }) => {
  const [dataTime, setDataTime] = useState({});

  return (
    <MyContext.Provider value={{ dataTime, setDataTime }}>
      {children}
    </MyContext.Provider>
  );
};

