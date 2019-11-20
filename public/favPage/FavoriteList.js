import Component from '../Component.js';
import FavoriteItem from './FavoriteItem.js';

class FavoriteList extends Component {
    onRender(dom){
        let articles = this.props.articles;
        let onDelete = this.props.onDelete;

        articles.forEach(article => {
            let articleToRender = new FavoriteItem({ 
                article,
                onDelete
            });

            const articleDOM = articleToRender.renderDOM();
            dom.appendChild(articleDOM);
        });

    }
    renderHTML(){
        return /*html*/`
        <section>
        
        </section>
        `;
    }
}

export default FavoriteList;