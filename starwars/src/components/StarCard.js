import React from "react";
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';
import "./StarWars.css"
import styled from "styled-components"

const Button = styled.button `
color: #FFF;
background: darkgrey;
border-radius: 12px;
`

const StarCard = props => {
    return (
        <div className="starCards">
        <Card className="cards">
          <CardBody className= "body">
            <CardTitle>{props.person.name}</CardTitle>
            <CardText className="cardtext">Gender:{props.person.gender}
            </CardText>
            <CardText className="cardtext">Birth Year:{props.person.birth_year}
            </CardText>
            <Button href={props.person.url} target="'_blank">Check out the API</Button>
          </CardBody>
        </Card>
      </div>)
}

export default StarCard;