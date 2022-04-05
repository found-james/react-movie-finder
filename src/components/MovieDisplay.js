export default function MovieDisplay({movie}){
    const loaded = () => {
        return(
            <section>
            <img src={movie.Poster} alt={movie.Title}/>
            <article>
                <h1>{movie.Title}</h1>
                <h2>{movie.Genre}</h2>
                <h2>{movie.Year}</h2>
            </article>
            </section>
        )
    }

    const loading = () => {
        return (
            <section>
                <h1>No Movie to Display</h1>
            </section>
        )
    }

    return movie && movie.Title ? loaded() : loading();
}