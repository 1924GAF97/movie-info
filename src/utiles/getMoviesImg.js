import placeholder from "../pages/placeholder.png"

export default function getMovieImg (path, width){
    return path = path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}