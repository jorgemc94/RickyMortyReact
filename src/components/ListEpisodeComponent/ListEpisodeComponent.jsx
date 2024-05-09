
import { useEffect, useState } from 'react'
import './ListEpisodeComponent.css'
import { CardEpisodeComponent } from '../CardEpisodeComponent/CardEpisodeComponent'

export const ListEpisodeComponent = () => {

    const[episodes,setEpisodes] = useState([])
    useEffect (() => {
        fetch('https://rickandmortyapi.com/api/episode')
            .then((response) => {
                if (response.ok)
                    response.json().then((jsonData) => {
                        setEpisodes(jsonData.results)
                    })
            })
    }, [])
    return(
        <>
            <div className='ListEpisodeComponent__content'>
                {episodes.map((episode, index) => 
                    <CardEpisodeComponent 
                        id={episode.id} 
                        name={episode.name} 
                        airdate= {episode.air_date} 
                        episode= {episode.episode}
                        characters= {episode.characters}
                        url= {episode.url}
                        created = {episode.created}
                        key={index}
                    />
                )}
            </div>
        </>
    )
}