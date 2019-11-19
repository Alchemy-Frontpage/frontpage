import Component from '../Component.js';

class Header extends Component {
    // onRender() {
    //     const button = document.getElementsByTagName('button');

    //     button.addEventListener('click', event => {
    //         if (event) {
    //             button.classList.remove('show');
    //         }
    //         else {
    //             button.classList.add('show');
    //         }
    //     });
            
    // }
    


       
    
    renderHTML() {
        // const title = this.props.title || 'Front Page';
        
        return /*html*/ `
             <header>
           <nav class = "navbar">
           <div class ="container">
           <div class="navbar_header"> Swiping the hottest news
                    <button><i class="fa fa-bars"></i></button>
           </div>
           <ul class="navbar_links">
              <li>
                 <a href="../favPage/index.html" class="single-link">Favorites
                       <i class="fas fa-heart"></i>
                    </a>
                    </li>
                    <li>
                    <a href="../index.html" class="single-link">Front Page
                        <i class="fas fa-home"></i>
                    </a>
                    </li>
                    <li>
                    <a href="#" class="single-link">About Us
                       <i class="fas fa-users"></i>
                    </a>
                    </li>
               </ul>
               </div>
               </nav>
        </header>
        `;
    }
}

export default Header;