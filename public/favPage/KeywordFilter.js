import Component from '../Component.js';

class KeywordFilter extends Component {

    onRender(form) {

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);

            this.props.onSubmit(formData.get('search'));


        });
    }



    renderHTML() {
        return /*html*/`
        <form class="keyword-search">
        <label for="search">Search by keyword:</label>
        <p>
            <input id="search" name="search">
        </p>
        <p>
            <button>Search 🔍</button>
        </p>
        </form>
        `;
    }

}

export default KeywordFilter;