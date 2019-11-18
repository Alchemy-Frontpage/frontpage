import Component from '../Component.js';

class Footer extends Component {
    renderHTML() {

        return /*html*/ `
            <footer>
                <nav>
                    <a href="./">Feed</a>
                    <a href="./favorites">Faves</a>
                </nav>
            </footer>
        `;
    }
}

export default Footer;
