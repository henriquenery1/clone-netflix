import React from "react";
import './FeaturedMovie.css';

export default ({item}) => {

    let firtDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if(description.length > 200) {
        description = description.substring(0, 200)+'...';
    }

    return (
        <section className='featured' style= {{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }} >
            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--name'>{item.original_name}</div>
                    <div className='featured--info'>
                        <div className='featured--points'>{item.vote_average} pontos</div>
                        <div className='featured--year'>{firtDate.getFullYear()}</div>
                        <div className='featured--seasons'>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                        <div className='featured--description'>{item.overview}</div>
                        <div className='featured--buttons'>
                            <a href={`/watch/${item.id}`} className='featured--btn1'>Assistir</a>
                            <a href={`/list/add/${item.id}`} className='featured--btn2'>+ Minha lista</a>

                        </div>
                        <div className='featured--genres'><strong>Gêneros:</strong> {genres.join(', ')} </div>

                    </div>
                </div>
            </div>
        </section>
    )
}