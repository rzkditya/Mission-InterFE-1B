import React, { useState } from 'react'
import Button from '../atoms/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HoverCardWatch = ({movie: {category, watched, duration = '2j 33m', episodes = '16 Episodes', age_rating = '13+', genres = [], poster_path}, onShowDetail}) => {
    const isFilm = category === 'Films'
    const seriesWatched = isFilm ? null : '"Episode 1"'
    const baseStyle = 'flex flex-col bg-page-header w-[250px] lg:w-[385px] rounded-lg gap-3 lg:gap-5 drop-shadow-xl/50 drop-shadow-light-primary/50'

    if (watched) {
        return (
            <div className={baseStyle}>
                <figure className='relative'>
                    <img className="w-full aspect-16/9 object-cover rounded-t-lg" src={poster_path} alt="Test Image" />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent z-2"/>
                </figure>
                <section className='flex flex-col px-4 pb-4 gap-2 text-sm lg:text-xl text-light-primary'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-4 items-center'>
                            <Button variant='' className='w-6 lg:w-10 h-6 lg:h-10 bg-light-primary rounded-full'><FontAwesomeIcon icon="fa-solid fa-play" style={{color:"#000000",}}/></Button>
                            <Button variant='clean-white' className='w-8 lg:w-12 h-8 lg:h-12 rounded-full'><FontAwesomeIcon icon="fa-solid fa-check" /></Button>
                        </div>
                        <Button onClick={onShowDetail} variant='clean-white' className='w-8 lg:w-12 h-8 lg:h-12 rounded-full'><FontAwesomeIcon icon="fa-solid fa-angle-down" /></Button>
                    </div>
                    {seriesWatched}
                    <div className='flex items-center gap-2'>
                        <div className="relative w-[75%] h-1.5 bg-other-extra rounded-full overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full bg-primary-default"
                                style={{ width: '80%' }}
                            />
                        </div>
                        {duration}
                    </div>
                    <div>
                        <ul className='flex justify-evenly items-center text-xs lg:text-xl text-center text-light-secondary gap-2'>
                            {genres.map((genre, idx) => (
                                <React.Fragment key={genre}>
                                <li>{genre}</li>
                                {idx < genres.length - 1 && <li className="text-[6px]"><FontAwesomeIcon icon="fa-solid fa-circle" /></li>}
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                </section>        
            </div>
        )
    }
}

export default HoverCardWatch