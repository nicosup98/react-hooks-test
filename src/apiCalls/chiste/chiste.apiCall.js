import axios from 'axios'

export const getChiste  = async ()=>await axios.get('http://sv443.net/jokeapi/v2/joke/Any?type=single')