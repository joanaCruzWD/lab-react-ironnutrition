import { Card, Col, Button } from "antd";
import { useState } from 'react';


function FoodBox({ allFoods, deleteFood }) {
    return (
        <Col>
            <Card
                title={allFoods.name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img src={allFoods.image} height={60} alt="allFoods" />
                <p>Calories: {allFoods.calories} </p>
                <p>Servings: {allFoods.servings} </p>
                <p>
                    <b>Total Calories: {allFoods.calories * allFoods.servings} </b> kcal
                </p>

                <Button type="primary" onClick={() => deleteFood(allFoods.name)}> Delete </Button>
            </Card>
        </Col>
    );
}

export default FoodBox;