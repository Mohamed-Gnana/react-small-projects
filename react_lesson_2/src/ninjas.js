import React from 'react';

function Ninjas  (props)  {
        console.log(props , props.object , props.object.ninjas);
        let ninjas = props.object.ninjas ; 
        let deleteNinja = props.deleteNinja ; 
        let ninjalist = ninjas.map(ninja => {
            return (
                <div className="Ninja" key ={ninja.id}>
                    <p>Ninja Name : {ninja.name}</p>
                    <p>Ninja Age : {ninja.Age}</p>
                    <p>Ninja Belt : {ninja.belt}</p>
                    <button onClick = {() => {deleteNinja(ninja.id)}}>Delete</button>
                </div>
            )
        });
        return(
            <div className="Ninjalist">
                {ninjalist}
            </div>
        )
    }

export default Ninjas;