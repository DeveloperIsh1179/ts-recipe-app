import React, {
  createContext, useMemo, useState, Dispatch, SetStateAction,
} from 'react';

type FormContextInterface = {
  isNewUser: boolean,
  setIsNewUser: Dispatch<SetStateAction<boolean>>
}

const defaultState = {
  isNewUser: true,
  setIsNewUser: () => null,
};

interface FormProviderProps {
  children: React.ReactNode;
}

export const FormContext = createContext<FormContextInterface>(defaultState);

export function FormProvider({ children }: FormProviderProps) {
  const [isNewUser, setIsNewUser] = useState<boolean>(true);

  const value = useMemo(() => ({
    isNewUser, setIsNewUser,
  }), [isNewUser]);

  return (
    <FormContext.Provider value={value}>{children}</FormContext.Provider>
  );
}
