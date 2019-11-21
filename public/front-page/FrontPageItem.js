import Component from '../Component.js';

class FrontPageItem extends Component {

    onRender(dom) {
        const frontPageItem = this.props.item;
        const onKeep = this.props.onFavorite;
        // const onRemove = this.props.onRemove;


        const keepButton = dom.querySelector('.keep-button');
        keepButton.addEventListener('click', () => {

            onKeep(frontPageItem);
            dom.classList.add('keep');

            setTimeout(
                function Remove() {
                    dom.remove();
                },
                500);


        });

        const removeButton = dom.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            // onRemove(frontPageItem);
            dom.classList.add('remove');

            setTimeout(
                function Remove() {
                    dom.remove();
                },
                500);
        });


    }

    renderHTML() {
        const frontPageItem = this.props.item;

        return /*html*/ `
            <article class = "card-item">
                <h1 class="headline">${(frontPageItem.title === null) ? '' : frontPageItem.title}</h1>
                <img src="${frontPageItem.urlToImage}" alt="">
                <div class="byline">
                    <p class="author">${(frontPageItem.author === null) ? '' : frontPageItem.author}</p>
                    <p class="source">${(frontPageItem.source.name === null) ? '' : frontPageItem.source.name}</p>
                </div>
                <p class="summary">${(frontPageItem.description === null) ? '' : frontPageItem.description}</p>
                <div class="buttons">
                    <button class="remove-button">Remove</button>
                    <button class="keep-button">Keep</button>
                </div>
            </article>
        `;


    }

}

export default FrontPageItem;
