import './App.css';
import foodsJSON from "./foods.json";
import FoodBox from "./component/FoodBox";
import { useState } from 'react';
import './index.css';
import AddFoodForm from "./component/AddFoodForm";
import Search from "./component/Search";
import { Row, Divider, Button } from "antd";


function App() {
  const [allFoods, setAllFoods] = useState(foodsJSON); 
  const [foods, setFoods] = useState(foodsJSON);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const addNewFood = (foodObj) => {
    const updatedFoods = [foodObj, ...foods];
    const updatedAllFoods = [foodObj, ...allFoods];

    setFoods(updatedFoods);
    setAllFoods(updatedAllFoods);
  }

  const filterFoodList = (char) => {
    const filteredFood = allFoods.filter((oneFood) => {
      return oneFood.name.toLowerCase().startsWith(char.toLowerCase());
    })
    setFoods(filteredFood);
  }

  const deleteFood = (foodName) => {
    const filteredFood = foods.filter((oneFood) => {
      return oneFood.name !== foodName;
    })
    setFoods(filteredFood);
  }


  const setVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="App">
      <AddFoodForm setVisibility={setVisibility} addNewFood={addNewFood} isFormVisible={isFormVisible} />
      <Button onClick={isFormVisible} ></Button>

      <Search filterFoodList={filterFoodList} />
      <Divider>Food List</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foods.length !== 0 ? foods.map((foodItem) => {
          return (
            <div key= {foodItem.name}>
              <FoodBox foodItem={foodItem} deleteFood={deleteFood} />
            </div>
          )
        }) :
          <div className="message">
            <p> There's no more content to show 🚨</p>
            <iframe title="homer" src="https://giphy.com/embed/xT5LMSYp3XNMPIKnSw" width="480" height="362" frameBorder="0" class="giphy-embed"></iframe><p>
              <a href="https://giphy.com/gifs/season-12-the-simpsons-12x17-xT5LMSYp3XNMPIKnSw">via GIPHY</a></p>
          </div>}
      </Row>
    </div >
  )
}

export default App;
