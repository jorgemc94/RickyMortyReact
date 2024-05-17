
import { useEffect, useState } from 'react'
import './ListEpisodeComponent.css'
import { CardEpisodeComponent } from '../CardEpisodeComponent/CardEpisodeComponent'
import { useDispatch, useSelector } from 'react-redux'
import { GetEpisodeThunk } from '../../features/Episodes/EpisodeThunk'

export const ListEpisodeComponent = () => {

    const [data, setData] = useState([])
    const Episodes = useSelector((state) => state.episode.data)
    const EpisodesStatus = useSelector((state) => state.episode.status)
    const EpisodesError = useSelector((state) => state.episode.error)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if(EpisodesStatus === 'idle'){
            dispatch(GetEpisodeThunk())
        } else if (EpisodesStatus === 'pending') {
            setLoading(true)

        } else if (EpisodesStatus === 'fulfilled') {
            setLoading(false)
            setData(Episodes)
        } else {
            alert ('Error')
        }
    }, [EpisodesStatus,dispatch,Episodes])

    return(
        <>
            {loading ? <p>Loading...</p> : 
                <div className='ListEpisodeComponent__content'>
                    {data.map((episode, index) => 
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
            }
        </>
    )
}