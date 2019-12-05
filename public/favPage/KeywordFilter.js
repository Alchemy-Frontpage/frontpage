import Component from '../Component.js';

class KeywordFilter extends Component {

    onRender(dom) {
        const form = dom.querySelector('form');
        const clearButton = dom.querySelector('.clear-search');

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            this.props.onSubmit(formData.get('search'));

        });

        clearButton.addEventListener('click', () => {
            this.props.onClear(); // very nice!
            form.reset();
        });
    }

    renderHTML() {
        return /*html*/`
        <div class="search-container">
            <form class="keyword-search">
          
                <input id="search" name="search" placeholder="Search...">
            
                <button class="search">🔍</button>
                </form>
                <button class="clear-search">Clear</button>
       
        </div>
        `;
    }

}

export default KeywordFilter;