import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './EpisodeDetailsPage.css'
import { CardCharacterComponent } from "../../components/CardCharacterComponent/CardCharacterComponent"
import { useDispatch, useSelector } from "react-redux"
import { GetCharactersPerEpisodeThunk } from "../../features/CharacterPerEpisode/CharactersPerEpisodeThunk"
import { changes } from "../../features/CharacterPerEpisode/CharactersPerEpisodeSlice"

export const EpisodeDetailsPage = () => {
   
    const Characters = useSelector((state) => state.charactersPerEpisode.data.characters)
    const Episode = useSelector((state) => state.charactersPerEpisode.data.episodes)
    const CharactersStatus = useSelector((state) => state.charactersPerEpisode.status)
    const CharactersError = useSelector((state) => state.charactersPerEpisode.error)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [episode, setEpisode] = useState([])
    const [character, setCharacter] = useState([])
    const {id} = useParams()

    useEffect(() => {
        if (CharactersStatus === 'idle') {
            dispatch(GetCharactersPerEpisodeThunk(id))
        } else if (CharactersStatus === 'fulfilled') {
            setLoading(false)
            setEpisode(Episode)
            setCharacter(Characters)
        } else if (CharactersStatus === 'pending') {
            setLoading (true)
        } 
    }, [dispatch, CharactersStatus, Characters, Episode])

    useEffect(() => {
        dispatch(changes())
    }, [])

    return loading ? (
        <p>Loading</p>
    ) : (
        <section className="EpisodeDetailsPage">
                <div className="EpisodeDetailsPage__Content">
                    <ul className="EpisodeDetailsPage__Content__Details">
                        <li className="EpisodeDetailsPage__Content__Details__List"><h2 className="EpisodeDetailsPage__Content__List__Details__id">Episode: {episode.id}</h2></li>
                        <li className="EpisodeDetailsPage__Content__Details__List"><p className="EpisodeDetailsPage__Content__Details__List__description">Title:</p> {episode.name}</li>
                        <li className="EpisodeDetailsPage__Content__Details__List"><p className="EpisodeDetailsPage__Content__Details__List__description">Air date:</p> {episode.air_date}</li>
                        <li className="EpisodeDetailsPage__Content__Details__List"><p className="EpisodeDetailsPage__Content__Details__List__description">Number episode:</p> {episode.episode}</li>
                        <li className="EpisodeDetailsPage__Content__Details__List"><p className="EpisodeDetailsPage__Content__Details__List__description">Url:</p> {episode.url}</li>
                        <li className="EpisodeDetailsPage__Content__Details__List"><p className="EpisodeDetailsPage__Content__Details__List__description">Created:</p> {episode.created}</li>
                    </ul>
                </div>
                <div className="EpisodeDetailsPage__Content__Character">
                    <div className="EpisodeDetailsPage__Content__Character__Title">
                        <h1 className="EpisodeDetailsPage__Content__Character__Title__text">Characters in this episode</h1>
                    </div>
                    <div className="EpisodeDetailsPage__Content__Character__content">
                        {character.map((characters, index) => 
                        <CardCharacterComponent
                            id={characters.id}
                            image={characters.image} 
                            name={characters.name}  
                            species={characters.species}
                            status={characters.status} 
                            gender={characters.gender} 
                            key={index} 
                        />)}
                    </div>
                </div>
            </section>
    )
        
}