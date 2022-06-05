import React from 'react'
import { useState } from 'react';

import { createContext } from 'react'

export const Themecontext = createContext();

export const ThemeProvider = ({children})=>{
    let [theme,setTheme] = React.useState("light");
    let toggletheme = ()=>{
        if(theme==="light"){
            setTheme("Dark")
        }
        else{
            setTheme("light")
        }
    }

    return <Themecontext.Provider value={{theme,toggletheme}}>{children}</Themecontext.Provider>
}
