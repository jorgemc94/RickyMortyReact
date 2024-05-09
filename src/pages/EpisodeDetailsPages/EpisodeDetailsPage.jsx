
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './EpisodeDetailsPage.css'
import { CardCharacterComponent } from "../../components/CardCharacterComponent/CardCharacterComponent"


export const EpisodeDetailsPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [episodesDetails, setEpisodesDetails] = useState([])
    const [episodeCharacters, setEpisodeCharacters] = useState([])
    let {id} = useParams()
    useEffect (() =>{
        fetch (`https://rickandmortyapi.com/api/episode/${id}`).then((response) =>{
            if (response.ok) {
                response.json().then((jsonData) =>{
                    setEpisodesDetails(jsonData)
                    let characterID = []
                    jsonData.characters.map((character) => {
                        characterID.push(character.split('/')[5])
                    })
                    fetch(`https://rickandmortyapi.com/api/character/${characterID.join(',')}`).then((response) => {
                        if (response.ok) {
                            response.json().then((characterJson) => {
                                setEpisodeCharacters(characterJson)
                                setIsLoading(false)
                            }).catch((error) => console.log(error))
                        } else {
                            alert ('error')
                        }
                    }).catch((error) => console.log(error))
                }).catch((error) => console.log(error))
            } else {
                alert ('error')
            }
        }).catch((error) => console.log(error))
    }, [])

    return isLoading ? (
        <p>Loading</p>
    ) : (
        <section className="EpisodeDetailsPage">
                <div className="EpisodeDetailsPage__Content">
                    <h2 className="EpisodeDetailsPage__Content__id">Episode: {episodesDetails.id}</h2>
                    <p className="EpisodeDetailsPage__Content__details"><p className="EpisodeDetailsPage__Content__details__description">Title:</p> {episodesDetails.name}</p>
                    <p className="EpisodeDetailsPage__Content__details"><p className="EpisodeDetailsPage__Content__details__description">Air date:</p> {episodesDetails.air_date}</p>
                    <p className="EpisodeDetailsPage__Content__details"><p className="EpisodeDetailsPage__Content__details__description">Number episode:</p> {episodesDetails.episode}</p>
                    <p className="EpisodeDetailsPage__Content__details"><p className="EpisodeDetailsPage__Content__details__description">Url:</p> {episodesDetails.url}</p>
                    <p className="EpisodeDetailsPage__Content__details"><p className="EpisodeDetailsPage__Content__details__description">Created:</p> {episodesDetails.created}</p>
                </div>
                <div className="EpisodeDetailsPage__Content__Character">
                    <div className="EpisodeDetailsPage__Content__Character__Title">
                        <h1 className="EpisodeDetailsPage__Content__Character__Title__text">Characters in this episode</h1>
                    </div>
                    <div className="EpisodeDetailsPage__Content__Character__content">
                        {episodeCharacters.map((character, index) => 
                        <CardCharacterComponent
                            id={character.id}
                            image={character.image} 
                            name={character.name}  
                            species={character.species}
                            status={character.status} 
                            gender={character.gender} 
                            key={index} 
                        />)}
                    </div>
                </div>
            </section>
    )
        
}