import React, { useEffect } from "react";
import { useMeals } from "../../contexts/MealContext";

const Favorite = () => {
    const { favorite, getFavorite } = useMeals();
    useEffect(() => {
        getFavorite();
    }, []);

    return (
        <div>
            {favorite && favorite.meals ? (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Area</th>
                            </tr>
                        </thead>
                        <tbody>
                            {favorite.meals.map((item) => (
                                <tr>
                                    <td>
                                        <img
                                            src={item.meal.image}
                                            alt=""
                                            style={{ width: "50px" }}
                                        />
                                    </td>
                                    <td>{item.meal.title}</td>
                                    <td>{item.meal.description}</td>
                                    <td>{item.meal.price}</td>
                                    <td>{item.meal.category}</td>
                                    <td>{item.meal.area}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <h1>Favorite is empty</h1>
            )}
        </div>
    );
};

export default Favorite;
