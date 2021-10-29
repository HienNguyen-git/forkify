class SearchView {
  #parentElement = document.querySelector('.search');
  #searchField = this.#parentElement.querySelector('.search__field');
  getQuery() {
    const query = this.#searchField.value;
    this.#clear();
    return query;
  }

  addHandlerSearch(render) {
    this.#parentElement
      .querySelector('.search__btn')
      .addEventListener('click', function (e) {
        e.preventDefault();
        render();
      });
  }
  #clear() {
    this.#searchField.value = '';
  }
}

export default new SearchView();
