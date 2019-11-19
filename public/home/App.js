import Component from '../Component.js';
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const footer = new Footer();
        dom.appendChild(footer.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <main>
                    <p>Main App Page</p>
                </main>
                <!-- footer goes here -->
            </div>
        `;
    }
}

export default App;