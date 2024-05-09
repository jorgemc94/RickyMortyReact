
import { NavLink } from 'react-router-dom'
import './CardEpisodeComponent.css'

export const CardEpisodeComponent = (props) => {


    return(
        <>
            <div className='CardEpisodeComponent'>
                <p className='CardEpisodeComponent__name'>{props.name}</p>
                <ul className='CardEpisodeComponent__list'>
                    <li className='CardEpisodeComponent__list__item'><p className='CardEpisodeComponent__text'>Airdate</p>: {props.airdate}</li>
                    <li className='CardEpisodeComponent__list__item'><p className='CardEpisodeComponent__text'>Episode</p>: {props.episode}</li>
                </ul>
                <NavLink to={`/episode/${props.id}`}><button className='CardEpisodeComponent__button'>More info</button></NavLink>
            </div>
        </>
    )
}