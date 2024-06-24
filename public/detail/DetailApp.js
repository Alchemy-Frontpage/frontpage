import Component from '../Component.js';
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';
import DetailItem from './DetailItem.js';
import { getFavorite, deleteFavorite } from '../services/domain-api.js';

class DetailApp extends Component {
    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');

        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');
        if (!id) {
            window.location = '../favPage/index.html';
            return;
        }
        try {
            const article = await getFavorite(id);
            const detailItem = new DetailItem({
                article,
                onDelete: async () => {
                    try {
                        await deleteFavorite(id);
                        window.location = '../favPage/index.html';
                    }
                    catch (err) {
                        console.log(err);
                    }
                }
            });
            main.appendChild(detailItem.renderDOM());
        } catch (err) {
            console.log('Article Details loading failed\n', err);
        }

        const footer = new Footer();
        dom.appendChild(footer.renderDOM());

    }


    renderHTML() {
        return /*html*/ `
            <div>
                <p class="error"></p>
                <main>

                </main>
            </div>
        `;
    }
}

export default DetailApp;
