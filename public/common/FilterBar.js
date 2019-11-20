import Component from '../Component.js';

class FilterBar extends Component {
    onRender(dom){

        const filterButton = dom.querySelector('#submit-filter');
        filterButton.addEventListener('click', event => {
            
            const filterKeywords = dom.querySelector('input').value;
            const filterParams = new URLSearchParams().set('q', filterKeywords);
            //window.location = location + filterParams;

        });

    }
    renderHTML(){
        return /*html*/`
        <div id="filter-container">
            <input type="text" id="filter-bar">
            <button id="submit-filter">Filter</button>
        </div>
        `;
    }
}

export default FilterBar;