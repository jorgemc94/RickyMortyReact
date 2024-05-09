

import { FormCharacterComponent } from '../components/FormCharcarterComponent/FormCharacterComponent'
import './style.css'


export const FormCharacterPage = () => {

    return(
        <>
            <div className='Title'>
                <h1 className='Title__text'>New Character</h1>
            </div>
            <FormCharacterComponent />
        </>
    ) 
}