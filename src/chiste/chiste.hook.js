import {useState} from 'react'
import axios from 'axios'
export const useChiste = async ()=>{
    const [chiste,setChiste] = useState(null)

    setChiste((await axios.get('')).data)
    return chiste

}