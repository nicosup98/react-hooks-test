import axios from 'axios'

import { getRandomNumber } from '../../commonHooks/getRandomNumber'
export const PokemonApiGet = async ()=> (await axios.get(`https://pokeapi.co/api/v2/pokemon/${getRandomNumber(499)}`)).data

