import { createContext, useState } from "react";
import run from "../config/Dhi"

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("") // To capture whatever the user enters in the input box.

    const [recentPrompt, setRecentPrompt] = useState("")

    const [prevPrompts, setPrevPrompts] = useState([]) // To maintain the history of searches.

    const [showResult, setShowResult] = useState(false) // If true, the results will be displayed using "resultData" state on the main screen, if false the "resultData" state will not be displayed on the screen.

    const [loading, setLoading] = useState(false) // To display the loading animation while fetching the data from the api.

    const [resultData, setResultData] = useState("") // whatever stored in this state will be served as output to the user.

    // To display the text one by one
    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord)
        }, 75 * index)
    }

    // To start a new chat
    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async(prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)

        let response;
        if (prompt !== undefined) {
            response = await run(prompt)
            // setRecentPrompt(prompt)
        } else {
            setPrevPrompts(prev => [...prev, input])
            setRecentPrompt(input)
            response = await run(input)
        }

        let responseArray = response.split("**");
        let newResponse="";
        for (let i = 0; i < responseArray.length; i++) {
            if(i === 0 || i%2 !== 1){
                newResponse += responseArray[i]
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("<br />")

        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i]
            delayPara(i, nextWord + " ")            
        }
        setLoading(false)
        setInput("")
    }

    const contextValue = {
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompts,
        setPrevPrompts,
        showResult,
        setShowResult,
        loading,
        setLoading, 
        resultData,
        setResultData,
        onSent,
        newChat
    }

    return (
        <Context.Provider value={{...contextValue}} >
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;