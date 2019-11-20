import Component from '../Component.js';
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';
import FavoriteList from './FavoriteList.js';
import KeywordFilter from './KeywordFilter.js';
import { deleteFavorite, getFavorites, getFavoritesFilter } from '../services/domain-api.js';

class FavPageApp extends Component {
    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const keywordFilter = new KeywordFilter({ 
            onSubmit: async (searchQuery) => {

                const articles = await getFavoritesFilter(searchQuery);
                favoriteList.update({ articles });
            },
            onClear: async () => {
                const articles = await getFavorites();
                favoriteList.update({ articles });
            }
        });
        dom.appendChild(keywordFilter.renderDOM());

        
        const favoriteList = new FavoriteList({
            articles: [],
            onDelete: async favoriteToRemove => {
                try {
                    await deleteFavorite(favoriteToRemove.id);
                    let articles = await getFavorites();
                    favoriteList.update({ articles });
                }
                catch (err){
                    console.log(err);
                }
            }
        });
        dom.appendChild(favoriteList.renderDOM());


        try {
            let articles = await getFavorites();
            favoriteList.update({ articles });
        }
        catch (err) {
            console.log(err);
        }

        const footer = new Footer();
        dom.append(footer.renderDOM());

        

    }
    renderHTML(){
        return /*html*/`
        <main>
        </main>
        `;
    }
}

export default FavPageApp;