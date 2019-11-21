import Component from '../Component.js';

class FavoriteItem extends Component {
    onRender(dom){
        const article = this.props.article;
        const onDelete = this.props.onDelete;
        

        const removeButton = dom.querySelector('.delete-fav');
        removeButton.addEventListener('click', event => {
            // event.preventDefault();
            onDelete(article);
            //.console.log(article);
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
            <div class="img-container">
             <a href="../detail/detail.html?id=${article.id}">
                <img src="${article.image}">
                </div>
                <a href="../detail/detail.html?id=${article.id}">
                    <h2>${article.title}</h2>
                    <p>${description}</p>
                </a>
                    <button class="delete-fav"><img src="../assets/delete_yellow.png" alt="heart-icon"></button>
            </article>
            
        `;
    }
}

export default FavoriteItem;