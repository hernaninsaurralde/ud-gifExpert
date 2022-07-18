import { useState } from "react";

const AddCategory = ({ newCategory }) => {

    const [inputValue, setInputValue] = useState('');

    //Cambios en el input
    const onInputChange = (event) => {

        setInputValue(event.target.value)
    }

    //Se envia formulario
    const onSubmit = (event) => {
        event.preventDefault();
       
        if(inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue, ...categories])
        newCategory( inputValue.trim() )

        setInputValue('') //Deja el input en blanco una vez que se agrega
    }


    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="buscar Gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            ></input>
        </form>

    );
}

export default AddCategory;