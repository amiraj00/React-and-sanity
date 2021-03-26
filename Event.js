import {useState} from 'react';
import {getEvents} from '../Utilitis/eventService'

const Events = () => {
    const [data, setData] = useState([])

    const handleClick = async() =>{
        const events = await getEvents();
        setData(events);
    }
    return(
        <div>
        {data?.length > 0 ? <p>{JSON.stringify(data[0].title)}</p> : null}
        <button type="button" onClick={handleClick}>Jeg er en knapp</button>
        </div>
    )
}

export default Events;