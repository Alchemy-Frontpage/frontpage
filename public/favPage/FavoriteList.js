import Component from '../Component.js';
import FavoriteItem from './favoriteItem.js';

export class FavoriteList extends Component {
    onRender(dom){
        let articles = this.state.articles;
        let onDelete = this.props.onDelete;

        articles.forEach(article => {
            let articleToRender = new FavoriteItem({ 
                article
                
                ,
                onDelete
            });

            const articleDOM = articleToRender.renderDOM();
            dom.appendChild(articleDOM);
        });

    }
    renderHTML(){
        return /*html*/`
        <section></section>
        `;
    }
}