import React, { useEffect, useRef, useState } from "react"
import './TitleCards.css'
//import cards_data from '../../assets/cards/Cards_data'
import { Link } from "react-router-dom"

const TitleCards = ({title, category}) => {


    const [apiData, setApiData] = useState([]);
    const cardsRef = useRef();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2ZlM2RkMTZhYjUwMzlmNzVhYmI3MjA5MTU5YTQ1MSIsIm5iZiI6MTc1NzE3NjM3My4yMTI5OTk4LCJzdWIiOiI2OGJjNjIzNTM0Zjc1ZDFlM2U5OGI5NDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2ecg7WE_r9gbQJLqSBc4iCL5E1AIbsuWfdtJ2bUaOmk'
        }
    };

    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results))
        .catch(err => console.error(err));

        cardsRef.current.addEventListener("wheel", handleWheel);
    }, [])

  return (
    <div className='titlecards'>
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className="card-list" ref={cardsRef}>
            {apiData.map((card, index) => (
                <Link to={`/player/${card.id}`} className="card" key={index}>
                    <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
                    <p>{card.original_title}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}
export default TitleCards