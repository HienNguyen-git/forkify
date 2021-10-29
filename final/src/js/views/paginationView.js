import { View } from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerPagination(render) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      const gotoPage = +btn.dataset.goto;
      console.log(gotoPage);
      render(gotoPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.recipes.length / this._data.resultPerPage
    );
    // Page 1 and other page
    if (curPage == 1 && numPages > 1) {
      return `
            ${this._generateNextPage(curPage)}
        `;
    }
    // Last page
    if (curPage == numPages && numPages > 1) {
      return `
            ${this._generatePrePage(curPage)}
        `;
    }

    // Other page
    if (curPage > 1 && numPages > 1) {
      return `
            ${this._generatePrePage(curPage)}
            ${this._generateNextPage(curPage)}
        `;
    }
    // Just one page
    return '';
  }

  _generatePrePage(el) {
    return `
        <button data-goto="${el - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${el - 1}</span>
        </button>
    `;
  }

  _generateNextPage(el) {
    return `
        <button data-goto="${el + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${el + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
      `;
  }
}

export default new PaginationView();
