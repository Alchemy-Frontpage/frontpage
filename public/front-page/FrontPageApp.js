import Component from '../Component.js';
import Header from '../common/Header.js';
import Footer from '../common/frontFooter.js';
import Loading from '../common/Loading.js';
import FrontPageList from './FrontPageList.js';
import { getFrontPage, addFavorite } from '../services/domain-api.js';
class FrontPageApp extends Component {

    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const loading = new Loading({ loading: true });
        dom.appendChild(loading.renderDOM());

        const main = dom.querySelector('main');
        console.log(main);
        const publisherList = dom.querySelector('#publisher-list');

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
            // window.location = window.location + '#';
            // let url = new URL(window.location);
            
            const frontPageItems = await getFrontPage();
            this.state.frontPageItems = frontPageItems;
            frontPageList.update({ frontPageItems });

            let publishers = frontPageItems.reduce((acc, curr) => {
                if (!acc.includes(curr.source.id)){
                    acc.push(curr.source.id);
                }
                return acc;
            }, []);
            publishers = publishers.sort();
            publishers.forEach(publisher => {
                let publisherSpan = document.createElement('p');
                publisherSpan.textContent = publisher + '  ';

                const publisherCheckbox = document.createElement('input');
                publisherCheckbox.type = 'checkbox';
                publisherCheckbox.value = publisher;
                publisherSpan.appendChild(publisherCheckbox);

                publisherCheckbox.addEventListener('change', event =>{
                    if (event.target.checked){
                        location.hash += event.target.value + '&';
                    } else {
                        let spliceThisHash = location.hash.slice(1).split('&');
                        console.log(`spliceThisHash: ${spliceThisHash}`);
                        const targetIndex = spliceThisHash.indexOf(event.target.value);
                        spliceThisHash.splice(targetIndex, 1);
                        const hashMinusRemoved = spliceThisHash.join('&');
                        location.hash = hashMinusRemoved;
                    }
                });

                // let updatedString = (str) => {
                //     str.split('&').splice(index).join('&');
                //     return updatedString;
                // };

                // const publisherGap = document.createElement('span');
                // publisherGap.textContent = ' ';
                // publisherSpan.appendChild(publisherGap);
                publisherList.appendChild(publisherSpan);
            });

            window.addEventListener('hashchange', () => {
                const blacklist = location.hash
                    .slice(1).split('&');
                const newItems = frontPageItems.filter(article => {
                    if (!blacklist.includes(article.source.id)){
                        return article;
                    }
                });
                frontPageList.update({ frontPageItems: newItems });
            });

        } catch (err) {
            console.log('Update News List failed\n', err);
        } finally {
            loading.update({ loading: false });
        }

        const footer = new Footer();
        main.appendChild(footer.renderDOM());

        const filterButton = dom.querySelector('#filter-button');
        filterButton.addEventListener('click', () => {
            const filterArea = dom.querySelector('#publisher-list');
            console.log(filterArea);
            if (filterArea.style.display === 'block'){
                filterArea.style.display = 'none';
            } else {
                filterArea.style.display = 'block';
            }
            //.style.display = 'block';
        });
    }

    renderHTML() {
        return /*html*/ `
            <div>
                <p class="error"></p>
                <main class="cards-container"></main>
                <div id="publisher-list"></div>
                <button id="filter-button">BUTTON</button>
            </div>
        `;
    }
}

export default FrontPageApp;
