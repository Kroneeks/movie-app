import { useState } from "react";

const MovieCreateform = (props) => {
  const defaultData = {
    name: "",
    description: "",
    rating: "",
    image: "",
    cover: "",
    longDesc: "",
  };

  const formData = props.initialData ? { ...props.initialData } : defaultData;

  const [form, setform] = useState(formData);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    setform({
      ...form,
      [name]: target.value,
    });
  };

  const handleGenreChange = (event) => {
    const { options } = event.target;
    const optionsLength = options.length;
    let value = [];

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setform({
      ...form,
      genre: value.toString(),
    });
  };

  const submitform = () => {
    props.handleFormSubmit({ ...form });
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Название</label>
        <input
          onChange={handleChange}
          value={form.name}
          autoComplete="off"
          name="name"
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Эбигейл"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Описание</label>
        <input
          onChange={handleChange}
          value={form.description}
          name="description"
          type="text"
          className="form-control"
          id="description"
          placeholder="Молодая девушка Эбигейл живет в городе..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Рейтинг</label>
        <input
          onChange={handleChange}
          value={form.rating}
          name="rating"
          type="number"
          max="5"
          min="0"
          className="form-control"
          id="rating"
          placeholder="3"
        />
        <small id="emailHelp" className="form-text text-muted">
          Макс: 5, Мин: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Изображение</label>
        <input
          onChange={handleChange}
          value={form.image}
          name="image"
          type="text"
          className="form-control"
          id="image"
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Обложка</label>
        <input
          onChange={handleChange}
          value={form.cover}
          name="cover"
          type="text"
          className="form-control"
          id="cover"
          placeholder="http://......"
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Полное описание</label>
        <textarea
          onChange={handleChange}
          value={form.longDesc}
          name="longDesc"
          className="form-control"
          id="longDesc"
          rows="3"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Жанр</label>
        <select
          onChange={handleGenreChange}
          multiple
          className="form-control"
          id="genre"
        >
          <option>драма</option>
          <option>музыка</option>
          <option>приключения</option>
          <option>история</option>
          <option>экшен</option>
        </select>
      </div>
      <button onClick={submitform} type="button" className="btn btn-primary">
        {props.submitButton || "Добавить"}
      </button>
    </form>
  );
};

export default MovieCreateform;
