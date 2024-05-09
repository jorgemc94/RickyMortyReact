import { useEffect, useState } from 'react'
import './ListCharacterComponent.css'
import { CardCharacterComponent } from '../CardCharacterComponent/CardCharacterComponent'

export const ListCharacterComponent = () => {
    const [characters, setCharacters] = useState([])
    useEffect (() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => {
                if (response.ok)
                    response.json().then((jsonData) => {
                        setCharacters(jsonData.results)
                    })
            })
    }, [])

    return(
        <>
            <div className='ListComponent__content'>
                {characters.map((character, index) => 
                    <CardCharacterComponent 
                        id={character.id}
                        image={character.image} 
                        name={character.name}  
                        species={character.species}
                        status={character.status} 
                        gender={character.gender} 
                        key={index} 
                    />
                )}
            </div>
        </>
    )
}