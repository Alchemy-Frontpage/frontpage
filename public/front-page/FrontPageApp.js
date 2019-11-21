import Component from '../Component.js';
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';
import Loading from '../common/Loading.js';
import FrontPageList from './FrontPageList.js';
import { getFrontPage, addFavorite } from '../services/domain-api.js';

// document.addEventListener('DOMContentLoaded', function(event) {
//     // DOM fully loaded and parsed

//     function stackedCards() {
//         // Our code will go here
//     }

//     stackedCards();
// });

class FrontPageApp extends Component {

    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const loading = new Loading({ loading: true });
        dom.appendChild(loading.renderDOM());

        const main = dom.querySelector('main');

        const frontPageList = new FrontPageList({
            frontPageItems: [],
            onFavorite: async newFavorite => {
                try {
                    await addFavorite(newFavorite);

                } catch (err) {
                    console.log(err);
                }
            }
        });
        main.appendChild(frontPageList.renderDOM());
        try {
            const frontPageItems = await getFrontPage();
            this.state.frontPageItems = frontPageItems;

            frontPageList.update({ frontPageItems });

        } catch (err) {
            console.log('Update News List failed\n', err);
        }
        finally {
            loading.update({ loading: false });
        }

        const footer = new Footer();
        main.appendChild(footer.renderDOM());

    }

    renderHTML() {
        return /*html*/ `
            <div>
                <!-- header goes here -->
                <!-- show errors: -->
                <p class="error"></p>
                <main class="cards-container">
                    <!-- add todo goes here -->
                    <!-- todo list goes here -->
                </main>
            </div>
        `;
    }
}

export default FrontPageApp;
