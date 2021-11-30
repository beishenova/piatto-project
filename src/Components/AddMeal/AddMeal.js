import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { mealContext } from '../../contexts/MealContext';
import './AddMeal.css';
const AddMeal = () => {
  const [form, setForm] = useState({
    title: '',
    image: '',
    price: 0,
    description: '',
  });
  const history = useHistory();

  const { addMeal } = useContext(mealContext);
  const handleChange = (e) => {
    const values = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title && !form.image && !form.price && !form.description) {
      alert('Все поля должны быть заполнены!');
      return;
    }
    await addMeal({ ...form, seen: false });
    history.push('/');
  };

  return (
    <div>
      <h1>Добавить блюдо</h1>
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
        <button>Добавить</button>
      </form>
    </div>
  );
};

export default AddMeal;
