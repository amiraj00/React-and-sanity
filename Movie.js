import React from 'react'

const Movie = ({title, actor}) => {
    return (
        <div>
            <h1 id="txt">Title: {title} Actor:{actor}</h1>
        </div>
    )
}

export default Movie