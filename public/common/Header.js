import Component from '../Component.js';

class Header extends Component {
    
    renderHTML() {
        
        return /*html*/ `
            <header class="header">
                <a href="#" class="logo">Swiping for the hottest news</a>
                <input class="menu-btn" type="checkbox" id="menu-btn">
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                <ul class="navbar_links">
                    <li>
                        <a href="../favPage/index.html" class="single-link">Favorites
                            <i class="fas fa-heart"></i>
                        </a>
                    </li>
                    <li>
                        <a href="../front-page/front-page.html" class="single-link">Front Page
                            <i class="fas fa-home"></i>
                        </a>
                    </li>
                    <li>
                        <a href="../about/index.html" class="single-link">About Us
                            <i class="fas fa-users"></i>
                        </a>
                    </li>
                </ul>
        </header>
        </header>
        `;
    }
}

export default Header;