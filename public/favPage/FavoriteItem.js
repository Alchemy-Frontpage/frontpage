import Component from '../Component.js';

class FavoriteItem extends Component {
    onRender(dom) {
        const article = this.props.article;
        const onDelete = this.props.onDelete;


        const removeButton = dom.querySelector('.delete-fav');
        removeButton.addEventListener('click', () => {
            onDelete(article);
        });
    }

    renderHTML() {
        const { id, image, title } = this.props.article;

        return /*html*/`
            <article>
            <div class="img-container">
            <a href="../detail/detail.html?id=${id}">
                <img src="${image}" onerror="this.src='../assets/jasmin.jpg';">
                </div>
                    <h2>${title}</h2>   
                </a>
                    <button class="delete-fav"><img src="../assets/delete_yellow.png" alt="heart-icon"></button>
            </article>
            
        `;
    }
}

export default FavoriteItem;