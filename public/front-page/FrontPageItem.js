import Component from '../Component.js';

class FrontPageItem extends Component {

    onRender(dom) {
        const frontPageItem = this.props.item;
        const onKeep = this.props.onKeep;
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
        console.log(frontPageItem);

        return /*html*/`
            <li class = "front-page-item">
                <h1 class="headline">${frontPageItem.title}</h1>
                <img src="${frontPageItem.urlToImage}" alt="">
                <p class="byline">${frontPageItem.author}</p>
                <p class="source">${frontPageItem.source.name}</p>
                <p class="summary">${frontPageItem.description}</p>
                <button class="remove-button">Remove</button>
                <button class="keep-button">Keep</button>
            </li>


        `;


    }

}

export default FrontPageItem;