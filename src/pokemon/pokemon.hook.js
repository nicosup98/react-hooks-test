import { useState, useEffect } from 'react'
/**
 * 
 * @param {any} values valores del input para pokemones
 */
export const usePokemonInput = (values) => {
    const [input, setInput] = useState(values)
    useEffect(() => {
        console.log('hla')
    }, [])
    return [input, e => { setInput({ ...values, [e.target.name]: e.target.value }) }]
}