import Component from '../Component.js';

class Header extends Component {
    onRender(element) {
        const navButton = element.querySelector('.myLinks');
        navButton.addEventListener('click', () => {
            if (navButton.style.display === 'block') {
                navButton.style.display = 'none';
            } else {
                navButton.style.display = 'block';
            } 
        });
    }
    
    renderHTML() {
        // const title = this.props.title || 'Front Page';
        
        return /*html*/ `
            <header>
            <div class="topnav">
                <a href="#home" class="active">Swiping for the hottest news</a>
                <div class="myLinks">
                    <a href="#" class="single">Favorites
                        <i class="far fa-heart"></i>
                    </a>
                    <a href="#" class="single">Front Page
                        <i class="fas fa-home"></i>
                    </a>
                    <a href="#" class="single">About Us
                        <i class="fas fa-user-secret"></i>
                    </a>
                </div>
                <a href="#" class="icon">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
            <h1></h1>
        </header>
</header>
        `;
    }
}

export default Header;