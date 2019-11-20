import Component from '../Component.js';

class FrontPageItem extends Component {

    onRender(dom) {
        const frontPageItem = this.props.item;
        const onKeep = this.props.onFavorite;
        const onRemove = this.props.onRemove;


        const keepButton = dom.querySelector('.keep-button');
        keepButton.addEventListener('click', () => {
            
            //What functionality do we want to inlude here?

            onKeep(frontPageItem);

            
        });

        const removeButton = dom.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            onRemove(frontPageItem);
        });


    }

    renderHTML() {
        const frontPageItem = this.props.item;

        return /*html*/`
            <li class = "front-page-item">
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
            </li>


        `;


    }

}

export default FrontPageItem;