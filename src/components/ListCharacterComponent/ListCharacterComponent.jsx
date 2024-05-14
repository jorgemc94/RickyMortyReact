import { useEffect, useState } from 'react'
import './ListCharacterComponent.css'
import { CardCharacterComponent } from '../CardCharacterComponent/CardCharacterComponent'
import { useDispatch, useSelector } from 'react-redux'
import { GetCharacterThunk } from '../../features/tasks/taskThunk'

export const ListCharacterComponent = () => {
    
    const [data, setData] = useState([])
    const Characters = useSelector((state) => state.character.data)
    const CharactersStatus = useSelector((state) => state.character.status)
    const CharactersError = useSelector((state) => state.character.error)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if(CharactersStatus === 'idle'){
            dispatch(GetCharacterThunk())
        } else if (CharactersStatus === 'pending') {
            setLoading(true)

        } else if (CharactersStatus === 'fulfilled') {
            setLoading(false)
            setData(Characters)
        } else {
            alert ('Error')
        }
    }, [CharactersStatus,dispatch,Characters])


    return(
        <>
            {loading ? <p>Loading...</p> : 
                <div className='ListComponent__content'>
                    {data.map((character, index) => 
                        <CardCharacterComponent 
                            id={character.id}
                            image={character.image} 
                            name={character.name}  
                            species={character.species}
                            status={character.status} 
                            gender={character.gender} 
                            key={index} 
                        />
                    )}
                </div>
            }
            
        </>
    )
}