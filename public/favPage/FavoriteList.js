import Component from '../Component.js';
import FavoriteItem from './favoriteItem.js';
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';
// import FilterBar from '../filter/Filter.js';

export class FavoriteList extends Component {
    onRender(dom){
        let articles = this.state.articles;
        let onDelete = this.props.onDelete;

        const header = new Header();
        dom.prepend(header.renderDOM());

        // const filterBar = new FilterBar();
        // dom.append(filterBar.renderDOM());

        const footer = new Footer();
        dom.append(footer.renderDOM);

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
        <section></section>
        `;
    }
}