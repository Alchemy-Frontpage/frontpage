import Component from '../Component.js';
import FrontPageItem from './FrontPageItem.js';

class FrontPageList extends Component {
    
    onRender(dom) {
        const frontPageItems = this.props.frontPageItems;
        const onFavorite = this.props.onFavorite;
        const onRemove = this.props.onRemove;
        const list = dom.querySelector('.front-page-list');

        frontPageItems.forEach(item => {
            const frontPageItem = new FrontPageItem({ item, onFavorite, onRemove });
            list.appendChild(frontPageItem.renderDOM());
        });

    }

    renderHTML() {
        return /*html*/`

        <div class='list-container'>
            <ul class="front-page-list">
            </ul>
        </div>
            
        `;
    }
}

export default FrontPageList;
