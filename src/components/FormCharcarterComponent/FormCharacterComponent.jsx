
import { useDispatch } from 'react-redux';
import './FormCharacterComponent.css'
import { addCharacter } from '../../features/tasks/taskSlice';

export const FormCharacterComponent = () => {

    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const specie = event.target.elements.specie.value;
        dispatch(addCharacter({name, specie}))
    }


    return(
        <>
        {
            <form className='FormCharacterComponent__form' onSubmit={submitHandler}>
                <label htmlFor='name' className='FormCharacterComponent__form__label'>Name</label>
                <input className='FormCharacterComponent__form__input' id='name' name='name' type='text' placeholder='Name'></input>
                <label htmlFor='specie' className='FormCharacterComponent__form__label'>Specie</label>
                <input className='FormCharacterComponent__form__input' id='specie' name='specie' type='text' placeholder='Specie'></input>
                <button className='FormCharacterComponent__form__button' type='submit'>Send</button>
            </form>
        }
        </>
    )
}