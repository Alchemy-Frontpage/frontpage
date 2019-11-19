import Component from '../Component.js';

class Footer extends Component {
    renderHTML() {

        return /*html*/ `
            <footer>
                <nav>
                    <a href="./"><img src="../assets/reload_yellow.png" alt="reload-icon"></a>
                    <a href="./favorites"><img src="../assets/heart_yellow.png" alt="heart-icon"></a>
                </nav>
            </footer>
        `;
    }
}

export default Footer;
