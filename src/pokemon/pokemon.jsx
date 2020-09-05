import React, { useState,useEffect } from 'react'
import { usePokemonInput } from './pokemon.hook'
import { PokemonApiGet,PokemonApiGetNombre } from '../apiCalls/pokemon/pokemon.apiCall'
import './pokemon.scss'
export const Pokemon = () => {
    const [listPokemon, setListPokemon] = useState([])
    const [loading,setLoading] = useState(false)
    const [input,setInput] = usePokemonInput({PokemonName:''})

    const getPokemon = async () => {
        setLoading(true)
        let pk
        try {
            pk = await PokemonApiGet()
        } catch (error) {
            console.error({error})
        }
        if(pk != null){
            setListPokemon(pkms => [pk, ...pkms])
        } else {
            console.log('no encontro pokemon')
        }
        setLoading(false)
    }

    useEffect(() => {
    }, [listPokemon])

    const getPokemonName = async ()=>{
        setLoading(true)
        const pokemon = await PokemonApiGetNombre(input)
        setListPokemon(pkms=>[pokemon,...pkms])
        setLoading(false)
    }
    /** 
     * @param {any} e
     * @param {number} index
    */
    const deletePokemon = (index, e = null) => {
        if (e != null) {
            e.preventDefault()
        }
        setListPokemon(prev=> prev.filter((_,i)=> i != index))
    }
    return (
        <div className="container is-fluid">
            <div className="container box">
                <div className="columns">
                    <div className="column ">
                        <input type="text" placeholder='nombre o id del pokemon...' name='PokemonName' className='input is-medium' onKeyDown={e=>{if(e.key.toLowerCase() ==='enter')getPokemonName()}} value={input.PokemonName} onChange={setInput}/>
                    </div>
                    <div className="column">
                        <button className='button is-medium is-dark full-length' onClick={getPokemon}>randomPokemon</button>
                    </div>
                </div>
            </div>
            <div className="container mt-2">
                <span hidden={!loading}>bucando...</span>
                <div hidden={loading} className="columns is-desktop is-multiline">
                    {listPokemon.map((pk, i) => (
                        <div className="column is-2-desktop is-12-tablet" key={pk.id}>
                            <div className="box hover-animation" onContextMenu={(e) => { deletePokemon(i, e) }}>
                                <div className="pokemon-box">
                                    <button onClick={() => { deletePokemon(i) }} className="delete"></button>
                                    <figure className="image is-64x64">
                                        <img src={pk.sprites.front_default} alt="imagen" />
                                    </figure>
                                    <h3>{pk.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}