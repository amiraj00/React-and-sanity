import client from './Client';

const movieFields = `title, 'actor': actor=>name`;

export const getMovies = async () =>{
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
    return data;
};


