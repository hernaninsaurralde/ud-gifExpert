import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const GifExpertApp = () => {

    const [ categories , setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory) ) return;
        setCategories([newCategory, ...categories ])
        
    }

    return ( 
        <>
            { /* Titulo */}
            <h1>Gif Expert App</h1>

            { /* Input */}

            <AddCategory 
                //setCategories={ setCategories } 
                newCategory={ value => onAddCategory(value)}
            />

            { /* Listado de gifs */}
                {categories.map(category => 
                    (
                        <GifGrid 
                            category={category} 
                            key={category}/>
                    )
                    
                )}
            

                { /* Item gif */}
        </>
     );
}
 
export default GifExpertApp;