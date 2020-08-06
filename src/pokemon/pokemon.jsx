import React, { useState } from 'react'
import { PokemonApiGet } from './apiCalls/pokemon.apiCall'
import './pokemon.scss'
export const Pokemon = () => {
    const [listPokemon, setListPokemon] = useState([])
    const getPokemon = async () => {
        const pk = await PokemonApiGet()
        setListPokemon(pkms => [pk, ...pkms])
    }
    return (
        <div className="container is-fluid">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <button className='button is-medium is-dark full-length' onClick={getPokemon}>pokemon</button>
                    </div>
                </div>
            </div>
            <div className="container mt-2">
                <div className="columns is-desktop is-multiline">
                    {listPokemon.map(pk => (
                        <div className="column is-2-desktop is-12-tablet" key={pk.id}>
                            <div className="box hover-animation">
                                <div className="pokemon-box">
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