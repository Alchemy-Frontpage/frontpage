import Component from '../Component.js';
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';
import FilterBar from '../filter/Filter.js';
import FavoriteList from '../front-page/FrontPageList.js';
import deleteFavorite from '../services/domain-api.js';

class FavPageApp extends Component {
    async onRender(dom) {
        //UNCOMMENT AFTER WE HAVE FAVORITE ARTICLES IN DB
        //let articles = await fetch();

        const header = new Header();
        dom.prepend(header.renderDOM());
        
        const filterBar = new FilterBar();
        dom.append(filterBar.renderDOM());

        const favoriteList = new FavoriteList({
            onDelete: async favoriteToRemove => {
                try {
                    deleteFavorite(favoriteToRemove);
                }
                catch (err){
                    console.log(err);
                }
            },
            articles
        });

        const footer = new Footer();
        dom.append(footer.renderDOM);

    }
    renderHTML(){
        return /*html*/`
        <main>
        </main>
        `;
    }
}

export default FavPageApp