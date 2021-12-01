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
  const [viewForm, setViewFrom] = useState(true);

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
  const isVisible = () => {
    setViewFrom(!viewForm);
  };


  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />
      <Button onClick={isVisible} viewForm={viewForm}></Button>

      <Search filterFoodList={filterFoodList} />
      <Divider>Food List</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foods.map((allFoods) => {
          return (
            <div>
              <FoodBox allFoods={allFoods} deleteFood={deleteFood} />
            </div>
          )
        })}
      </Row>
    </div >
  )
}



export default App;
