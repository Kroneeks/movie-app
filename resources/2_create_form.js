<form>
  <div class="form-group">
    <label for="name">Название</label>
    <input
      autoComplete="off"
      type="text"
      class="form-control"
      id="name"
      aria-describedby="emailHelp"
      placeholder="Эбигейл"
    />
  </div>
  <div class="form-group">
    <label for="description">Описание</label>
    <input
      type="text"
      class="form-control"
      id="description"
      placeholder="Молодая девушка Эбигейл живет в городе..."
    />
  </div>
  <div class="form-group">
    <label for="rating">Рейтинг</label>
    <input
      type="number"
      max="5"
      min="0"
      class="form-control"
      id="rating"
      placeholder="3"
    />
    <small id="emailHelp" class="form-text text-muted">
      Макс: 5, Мин: 0{" "}
    </small>
  </div>
  <div class="form-group">
    <label for="image">Изображение</label>
    <input
      type="text"
      class="form-control"
      id="image"
      placeholder="http://....."
    />
  </div>
  <div class="form-group">
    <label for="cover">Обложка</label>
    <input
      type="text"
      class="form-control"
      id="cover"
      placeholder="http://......"
    />
  </div>
  <div class="form-group">
    <label for="longDesc">Полное описание</label>
    <textarea class="form-control" id="longDesc" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="genre">Жанры</label>
    <select multiple class="form-control" id="genre">
      <option>драма</option>
      <option>музыка</option>
      <option>приключения</option>
      <option>история</option>
      <option>экшен</option>
    </select>
  </div>
</form>;
