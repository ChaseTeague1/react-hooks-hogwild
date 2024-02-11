import React, {useState} from 'react';

function NewHogForm({onFormSubmit}){
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [weight, setWeight] = useState("");
    const [greased, setGreased] = useState(false);
    const [specialty, setSpecialty] = useState("")
    const [medal, setMedal] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        const newHog = {
            name: name, 
            image: image, 
            weight: parseInt(weight),
            greased: greased,
            specialty: specialty,
            "highest medal achieved": medal
        };
        onFormSubmit(newHog)
        setName("");
        setImage("");
        setWeight("");
        setGreased(false);
        setSpecialty("");
        setMedal("");
    }

    return (
        <form onSubmit={handleSubmit} className='hogForm'>
            <input 
            value={name}
            type="text" 
            placeholder='Enter hog name...'
            onChange={(e) => setName(e.target.value)}
            />
            <input 
            value={image}
            type="text" 
            placeholder='Enter hog image...'
            onChange={(e) => setImage(e.target.value)}
            />
            <input 
            value={weight}
            type="text" 
            placeholder='Enter hog weight...'
            onChange={(e) => setWeight(e.target.value)}
            />
            <input 
            value={specialty}
            type="text" 
            placeholder='Enter hog specialty...'
            onChange={(e) => setSpecialty(e.target.value)}
            />
            <label>
                Greased?
            <input 
            value={greased}
            type="checkbox"
            onChange={(e) => setGreased(e.target.value)}
            />
            </label>
            <input 
            value={medal}
            type="text" 
            placeholder='Enter highest medal...'
            onChange={(e) => setMedal(e.target.value)}
            />
            <input type="submit" value="add hog"/>
        </form>
    )
}

export default NewHogForm;