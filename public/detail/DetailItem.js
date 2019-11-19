import Component from '../Component.js';

class DetailItem extends Component {
    onRender(el) {
        const removeButton = el.querySelector('.remove-fav');
        removeButton.addEventListener('click', event => {
            event.preventDefault();
        });
    }

    renderHTML() {
        const detailItem = this.props.article;

        let description = '';
        if (detailItem.description) {
            description = detailItem.description;
        } else {
            description = detailItem.content.slice(0, 49);
        }

        return /*html*/ `<li class = "detail-item">
        <h1 class="headline"><a href="${detailItem.link} target=_blank">${detailItem.title}</a></h1>
        <img src="${detailItem.urlToImage}" alt="">
        <p class="publication_date">${detailItem.date}</p>
        <p class="byline">${detailItem.author}</p>
        <p class="source">${detailItem.source_name}</p>
        <p class="summary">${description}</p>
        <button class="remove-button">Remove from Favorites</button>
    </li>`;
    }
}

export default DetailItem;
