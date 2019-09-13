import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
const StarCard = props => {
    return (
        <div className="starCards" key={props.key}>
        <Card className="cards">
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardText className="cardtext">{props.gender}
            </CardText>
            <CardText className="cardtext">{props.species}
            </CardText>
            <CardText className="cardtext">{props.birthYear}
            </CardText>
            <CardImg bottom width="100%" src={props.homeworld} alt="Card image cap" />
          </CardBody>
        </Card>
      </div>)
}

export default StarCard;