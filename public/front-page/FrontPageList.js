import Component from '../Component.js';
import FrontPageItem from './FrontPageItem.js';

class FrontPageList extends Component {
    
    onRender(list) {
        const frontPageItems = this.props.frontPageItems;
        const onKeep = this.props.onKeep;
        const onRemove = this.props.onRemove;

        frontPageItems.forEach(item => {
            const frontPageItem = new FrontPageItem({ item, onKeep, onRemove });
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
