import React, {useContext} from 'react'
import { Context } from '../context'
import "./Card.css"


const Card = () => {
    const { tour } = useContext(Context)
    return (
        <div>
            {tour.map(el => {
                return (
                    <div>
                    <div className='tour-container'>  
                        <img src={el.image}/>
                        <div className='information'>
                        <h1>{el.name}</h1>
                        <p>{el.info}</p>
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card
