import React from 'react'

export const Home = () => (
    <div className="container">
        <div className="box">
            <h2>aplicacion para testear react</h2>
            <p>aplicacion utilizada para probar react con los hooks</p>
        </div>
        <a className="button link" onClick={(()=>{window.open("https://github.com/nicosup98/react-hooks-test")})} >portafolio</a>
    </div>
)