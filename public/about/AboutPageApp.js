import Component from '../Component.js';
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';

class AboutPageApp extends Component {
    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const footer = new Footer();
        dom.append(footer.renderDOM());
    }
    renderHTML(){
        return /*html*/`
        <div>
            <main>All about us</main>
        </div>
        `;
    }
}

export default AboutPageApp;