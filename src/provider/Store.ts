import React from "react";
interface MyContextTypes {

    globalState: [];
    setGlobalState: Function

}
export const MyContext = React.createContext<any>({});
