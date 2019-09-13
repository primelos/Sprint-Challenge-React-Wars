import React from 'react'
import styled from "styled-components";


const Cards = styled.div`
   padding: 2px;
   background: rgb(163, 96, 96, .5);
   margin: 10px;
   border-radius: 20px;
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