import { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { mealContext } from '../../contexts/MealContext';

const EditMeal = () => {
  const { mealDetails, getMealDetails, editMeal } = useContext(mealContext);
  const [form, setForm] = useState({
    title: mealDetails.title,
    image: mealDetails.image,
    price: mealDetails.price,
    description: mealDetails.description,
  }); 

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getMealDetails(id);
  }, []);

  useEffect(() => {
    setForm({
      title: mealDetails.title,
      image: mealDetails.image,
      price: mealDetails.price,
      description: mealDetails.description,
    });
  }, [mealDetails]);

  const handleChange = (e) => {
    const values = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.image || !form.price || !form.description) {
      alert('Все поля должны быть заполнены!');
      return;
    }
    await editMeal({ ...form, id });
    history.push('/');
  };

  return (
    <div>
      <h1>Изменить блюдо</h1>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Название блюда"
          name="title"
          value={form.title}
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Картинка"
          name="image"
          value={form.image}
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Цена"
          name="price"
          value={form.price}
        />
        <textarea
          cols="30"
          rows="10"
          onChange={handleChange}
          placeholder="Описание"
          name="description"
          value={form.description}
        ></textarea>
        <button>Изменить</button>
      </form>
    </div>
  );
};

export default EditMeal;
