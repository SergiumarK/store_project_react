import { createContext, useState } from "react";
import contentJSON from "./Data.json"

export const Ctx = createContext()

const Context = ({children}) => {
    const [content, setContent] = useState(contentJSON)

    return (
        <Ctx.Provider value={{content: content}}>
            {children}
        </Ctx.Provider>
    )
}

export default Context