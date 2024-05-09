
import { ListEpisodeComponent } from "../components/ListEpisodeComponent/ListEpisodeComponent"
import './style.css'


export const EpisodesPages = () => {

    return(
        <>
            <div className='Title'>
                <h1 className='Title__text'>EPISODES</h1>
            </div>
            <ListEpisodeComponent />
        </>
    )  
}