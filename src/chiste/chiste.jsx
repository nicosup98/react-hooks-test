import React,{useState} from 'react'
import { getChiste } from "../apiCalls/chiste/chiste.apiCall"
export const Chiste = ()=>{
    const [chiste,setChiste] = useState(null)
    const callChiste = async ()=>{
        const resp = await getChiste()
        setChiste(resp.data)
    }
    return(
        <div className="container">
            <div className="box" onClick={callChiste}>
                <h2 className="title">
                    {chiste}
                </h2>
            </div>
        </div>
    )
}