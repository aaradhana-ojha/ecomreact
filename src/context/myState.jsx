/* eslint-disable react/prop-types */
import MyContext from './myContext';
import { useState } from 'react';

const MyState = ({children}) => {
    
  const [loading, setLoading] = useState(false);
  return (
    <MyContext.Provider value={{
      loading,
      setLoading,
    }}>
       {children}
    </MyContext.Provider>
  )
}

export default MyState