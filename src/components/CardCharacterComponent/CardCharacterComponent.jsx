
import './CardCharacterComponent.css'

export const CardCharacterComponent = (props) => {



    return(
        <>
            <div className='CardComponent__content'>
                <div className='CardComponent__content__img'>
                    <img className='CardComponent__content__img__image' src={props.image}/>
                </div>
                <div className='CardComponent__content__text'>
                    <p className='CardComponent__content__text__name'>{props.name}</p>
                    <p className='CardComponent__content__text__status'>{props.status} - {props.species}</p>
                    <p className='CardComponent__content__text__gender'>{props.gender}</p>
                </div>
            </div>
        </>
    )
}