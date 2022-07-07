import React, {
  createContext, useMemo, useState, Dispatch, SetStateAction,
} from 'react';

type CognitoSessionContextType = {
  inSession: boolean
  setInSession: Dispatch<SetStateAction<boolean>>

}

const defaultState = {
  inSession: false,
  setInSession: () => null,

};
const CognitoSessionContext = createContext<CognitoSessionContextType>(defaultState);

type CognitoSessionProviderProps = {
  children: React.ReactNode;
}

export function CognitoSessionProvider({ children }: CognitoSessionProviderProps) {
  const [inSession, setInSession] = useState<boolean>(false);

  const value = useMemo(() => ({
    inSession, setInSession,
  }), [inSession]);

  return (
    <CognitoSessionContext.Provider value={value}>
      {children}
    </CognitoSessionContext.Provider>
  );
}
