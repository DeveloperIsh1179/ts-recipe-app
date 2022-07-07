import React, {
  createContext, useMemo, useState, Dispatch, SetStateAction,
} from 'react';

type FormContextType= {
  isNewUser: boolean,
  setIsNewUser: Dispatch<SetStateAction<boolean>>
}

const defaultState = {
  isNewUser: true,
  setIsNewUser: () => null,
};

type FormProviderProps = {
  children: React.ReactNode;
}

export const FormContext = createContext<FormContextType>(defaultState);

export function FormProvider({ children }: FormProviderProps) {
  const [isNewUser, setIsNewUser] = useState<boolean>(true);

  const value = useMemo(() => ({
    isNewUser, setIsNewUser,
  }), [isNewUser]);

  return (
    <FormContext.Provider value={value}>{children}</FormContext.Provider>
  );
}
