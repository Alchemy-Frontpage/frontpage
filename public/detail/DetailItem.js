import Component from '../Component.js';

class DetailItem extends Component {
    onRender(el) {
        const onDelete = this.props.onDelete;
        const removeButton = el.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            onDelete();
        });
    }

    renderHTML() {
        const detailItem = this.props.article;

        // let description = '';
        // if (detailItem.description) {
        //     description = detailItem.description;
        // } else {
        //     description = detailItem.content.slice(0, 49);
        // }

        // let content = '';
        // if (detailItem.content){
        //     content = detailItem.content;
        // } else 

        const date = new Date(detailItem.date);
        const actualDate = date.toDateString();
        const content = (detailItem.content === null) ? '' : detailItem.content;
        const splicedContent = content.slice(0, 260);

        return /*html*/ `<li class = "detail-item">
        <a href="${detailItem.link}" target="blank"><h2 class="headline">${detailItem.title}</h2></a>
        <p class="source-info">${detailItem.source_name}</p>
        <img class="article-image" src="${detailItem.image}" alt="">
        <div class="pub">
            <p class="publication_date info">${actualDate}</p>
            <p class="byline info">${(detailItem.author === null) ? '' : ' |  By ' + detailItem.author}</p>
        </div>
        <p class="content info">${splicedContent}<a href="${detailItem.link}" class="article-link">Full Article</a></p>
        <div class="links">
            
            <button class="remove-button"><img class="delete-button"src="../assets/delete_yellow.png"></button>
        </div>
    </li>`;
    }
}

export default DetailItem;
