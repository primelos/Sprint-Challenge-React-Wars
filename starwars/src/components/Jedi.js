import React, {useState, useEffect} from 'react';
import axios from "axios";
import JediList from './JediList'
import styled from "styled-components";

const Box = styled.div`
    display:flex;
    flex-wrap: wrap;
    color:black;
    justify-content: center;
    
    `

export default function Jedi (){
    const [troop, setTroop] = useState ([]);


    useEffect (() => {
        axios.get(`https://swapi.co/api/people/`)
            .then (response => {
                const info = response.data.results
                console.log(`star wars info `, info)
                setTroop(info)
            })
            .catch(error => {
                console.log(`Lost in Starwars`, error)
            })
    }, [])
    return(
        <Box>
            {troop.map(item =>(
                <JediList
                    key={item.id}
                    name={item.name}
                    eyeColor={item.eye_color}
                    hairColor={item.hair_color}
                    gender={item.gender}
                />
            ))}

        </Box>
    
        )
}