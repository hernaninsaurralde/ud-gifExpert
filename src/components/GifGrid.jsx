import { useFetchGifs } from '../hooks/useFetchGifs';
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && ( <h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {images.map(({ id, title, url }) => (


                    <GifItem id={id} title={title} url={url} />


                ))}
            </div>

        </>
    );
}

export default GifGrid;