
import { ListCharacterComponent } from "../components/ListCharacterComponent/ListCharacterComponent"
import './style.css'

export const IndexPages = () => {


    return(
        <>
        <div className='Title'>
                <h1 className='Title__text'>The Rick and Morty API</h1>
        </div>
        <ListCharacterComponent />
        </>
    ) 
}