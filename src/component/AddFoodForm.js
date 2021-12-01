import { useState } from 'react';
import { v4 } from 'uuid';
import "antd/dist/antd.css";
import { Divider, Input } from "antd";


function AddFoodForm({ addNewFood, isVisible, viewForm }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState(1);

    const handleName = (event) => setName(event.target.value);
    const handleImage = (event) => setImage(event.target.value);
    const handleCalories = (event) => setCalories(event.target.value);
    const handleServings = (event) => setServings(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newFood = {
            _id: v4(),
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        addNewFood(newFood);

        //clear inputs
        setName('');
        setImage('');
        setCalories('');
        setServings(1);
    }

    return viewForm ? (
        <form className="form" onSubmit={handleSubmit} >
            <Divider>Add Food Entry</Divider>

            <label>Name: </label>
            <Input value={name} type="text" onChange={handleName} />

            <label>Image: </label>
            <Input value={image} type="text" onChange={handleImage} />

            <label>Calories: </label>
            <Input value={calories} type="number" onChange={handleCalories} />

            <label>Servings: </label>
            <Input value={servings} type="number" onChange={handleServings} />

            <button type="submit">Create</button>
            
            <button onClick={isVisible} type="button">
                Hide Form
            </button>
        </form>
    ) : (
        <button onClick={isVisible} type="submit">
            Show Form
        </button>
    );
}

export default AddFoodForm;