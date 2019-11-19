import Component from '../Component.js';

class FavoriteItem extends Component {
    onRender(el){
        const onDelete = this.props.onDelete;

        const removeButton = el.querySelector('.remove-fav');
        removeButton.addEventListener('click', event => {
            event.preventDefault();
            onDelete(this.event);
        });
    }
    
    renderHTML(){
        const article = this.props.article;

        let description = '';
        if (article.description){
            description = article.description;
        } else {
            description = article.content.slice(0, 49);
        }

        return /*html*/`
            <article>
                <img src="${article.urlToImage}">
                <h2>${article.title}</h2>
                <p>${description}</p>
                <button class="delete-fav">❌</button>
            </article>
        `;
    }
}

export default FavoriteItem;