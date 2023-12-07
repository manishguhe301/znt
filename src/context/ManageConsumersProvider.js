import React, { createContext, useState } from 'react';

export const ManageConsumersContext = createContext();

export const ManageConsumersProvider = ({ children }) => {
  const [isManageConsumersClicked, setIsManageConsumersClicked] =
    useState(false);

  return (
    <ManageConsumersContext.Provider
      value={{ isManageConsumersClicked, setIsManageConsumersClicked }}
    >
      {children}
    </ManageConsumersContext.Provider>
  );
};
