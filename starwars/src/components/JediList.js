import React from 'react'
import styled from "styled-components";


const Cards = styled.div`
   
`


const JediList = (props) =>{

    return(
        <Cards className="new-cards">
            <div>
            <h2>{props.name}</h2>
            <p>Eye Color: {props.eyeColor}</p>
            <p>Hair Color: {props.hairColor}</p>
            <p>Gender: {props.gender}</p>
            </div>
        </Cards>

    )
}

export default JediList;