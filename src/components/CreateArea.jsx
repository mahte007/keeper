import React, {useState} from "react";


function CreateArea(props) {
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });
    
    function handleChange(event){
        const {name, value} = event.target;

        setInputText(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    return (
        <div>
        <form onSubmit={(event) => event.preventDefault()}>
            <input onChange={handleChange} name="title" placeholder="Title" value={inputText.title}/>
            <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={inputText.content}/>
            <button type="submit" onClick={() => {
                props.onAdd(inputText);
                setInputText({
                    title: "",
                    content: ""
                });
            }}>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;
