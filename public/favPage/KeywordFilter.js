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
            this.props.onClear();
        });
    }

    renderHTML() {
        return /*html*/`
        <div class="search-container">
            <form class="keyword-search">
            <label></label>
            <p>
                <input id="search" name="search" placeholder="Keywords">
            </p>
            <p>
                <button class="search">Search 🔍</button>
            </p>
            
            </form>
        <p>
            <button class="clear-search">Clear Search</button>
        </p>
        </div>
        `;
    }

}

export default KeywordFilter;