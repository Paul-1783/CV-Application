import React, {useContext, useState, createContext} from 'react'

export const ThemeContext = React.createContext(null);
export const ThemeUpdateContext = React.createContext(null);

// export function useTheme() {
//     return useContext(ThemeContext);
// }

// export function useUpdatedTheme(){
//     return useContext(ThemeUpdateContext);
// }

export function ThemeProvider({children}) {
    const [allInformation, setAllInformation] = useState([])  

    function handleAddedInfo(e){
        setAllInformation(previousInfo => {
             if(previousInfo.length === 0 || !previousInfo.filter(entry => e.formTopic === entry.formTopic)){
                return [...previousInfo, e]
            }
            else {
                return previousInfo.map(entry => {
                    if(e.formTopic === entry.formTopic) 
                        for(let property in e)
                            entry[`${property}`] = e[`${property}`]
                    return entry;
                })
            }
     
        })
    }

    console.log("allInformation ", allInformation)

      return (
        <ThemeContext.Provider value={allInformation}>
            <ThemeUpdateContext.Provider value={handleAddedInfo}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
      )
}