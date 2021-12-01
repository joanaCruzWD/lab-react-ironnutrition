import { useState } from 'react';
import { Divider, Input } from "antd";

function Search({ filterFoodList }) {

    const [foodName, setFoodName] = useState('');
    const handleSearch = (event) => {
        setFoodName(event.target.value);
        filterFoodList(event.target.value);
    }

    return (
        <div className="form">
            <Divider>Search</Divider>
            
            <label>Search</label>
            <Input value={foodName} type="text" onChange={handleSearch} />
        </div>
    );
}

export default Search;