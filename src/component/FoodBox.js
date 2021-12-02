import { Card, Col, Button } from "antd";

function FoodBox({ foodItem, deleteFood }) {

    return (
        <Col>
            <Card
                title={foodItem.name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img src={foodItem.image} height={60} alt="allFoods" />
                <p>Calories: {foodItem.calories} </p>
                <p>Servings: {foodItem.servings} </p>
                <p>
                    <b>Total Calories: {foodItem.calories * foodItem.servings} </b> kcal
                </p>

                <Button type="primary" onClick={() => deleteFood(foodItem.name)}> Delete </Button>
            </Card>
        </Col>
    )
}

export default FoodBox;