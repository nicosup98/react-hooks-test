import React,{useState} from 'react'
import { getChiste } from "../apiCalls/chiste/chiste.apiCall"
import './chiste.scss'
export const Chiste = ()=>{
    const [chiste,setChiste] = useState("presioname")
    const callChiste = async ()=>{
        const resp = await getChiste()
        console.log({resp})
        setChiste(resp.data.joke)
    }
    return(
        <div className="container pointer">
            <div className="box" onClick={callChiste}>
                <h2 className="title">
                    {chiste}
                </h2>
            </div>
        </div>
    )
}