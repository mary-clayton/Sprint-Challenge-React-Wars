import React, {useState, useEffect} from "react"
import StarCard from "./StarCard"
import axios from "axios"

function StarGrid() {
    const [star, setStar] = useState([])
    useEffect(()=> {
    axios
    .get(`https://swapi.co/api/people/5/`)
    .then(response => {
        const reactWars = response.data;
        setStar(reactWars)
        console.log("star wars characters", reactWars);
    })
    .catch(error => {
        console.log("The force is too strong", error);
    })
    }, [])
    return (
        <div className = "starGrid">
            <StarCard 
            key= {star.key} 
            name= {star.name}
            gender={star.gender}
            species={star.species} 
            birthYear= {star.birthYear} 
            homeworld= {star.homeworld}   
            />
        </div>
    )
}
export default StarGrid;