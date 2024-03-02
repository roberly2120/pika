import React, { createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const initialState = {
        test: "working"
    }
    const [state, setState] = React.useState(initialState);

    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    );
};
export { AppContext, AppProvider };
