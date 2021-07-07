// usando estados em componentes funcionais

import React, {useState} from 'react';

export default function App1(){
    const [nome, setNome] = useState(' ');
 
    return (
        <>
        Nome: <input type="text" value={nome} onChange={(event) => setNome(event.target.value)}/>
        <br/>
        Olá {nome}
        </>
    );
}