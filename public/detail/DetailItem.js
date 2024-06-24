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

        const date = new Date(detailItem.date);
        const actualDate = date.toDateString();
        const content = (detailItem.content === null) ? '' : detailItem.content;
        const splicedContent = content.slice(0, 260);
        const byline = (detailItem.author === null)
            ? ''
            : ` |  By  ${detailItem.author}`;

        return /*html*/ `<li class = "detail-item">
        <a href="${detailItem.link}" target="blank"><h2 class="headline">${detailItem.title}</h2></a>
        <p class="source-info">${detailItem.source_name}</p>
        <div class="image-container">
        <img class="article-image" src="${detailItem.image}" onerror="this.src='../assets/jasmin.jpg';" alt="">
        </div>
        <div class="pub">
            <p class="publication_date info">${actualDate}</p>
            <p class="byline info">${byline}</p>
        </div>
        <p class="content info">${splicedContent}<a href="${detailItem.link}" class="article-link">Full Article</a></p>
    
            
            <button class="remove-button"><img class="delete-button"src="../assets/delete_yellow.png"></button>

    </li>`;
    }
}

export default DetailItem;
