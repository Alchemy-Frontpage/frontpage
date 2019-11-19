import Component from '../Component.js';
import Header from '../common/Header.js';
// import Loading from '../common/Loading.js';
// import AddTodo from './AddTodo.js';
import DetailItem from './DetailItem.js';

class DetailApp extends Component {

    async onRender(dom) {
        const header = new Header({ title: 'Article Details' });
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');
        // const error = dom.querySelector('.error');

        // const loading = new Loading({ loading: true });
        // dom.appendChild(loading.renderDOM());

        // const newTodo = new AddTodo({
        //     onAdd: async todo => {
        //         loading.update({ loading: true });
        //         error.textContent = '';

        //         try {
        //             const saved = await addTodo(todo);

        //             const todos = this.state.todos;
        //             todos.push(saved);

        //             todoList.update ({ todos });
        //         }

        //         catch (err) {
        //             error.textContent = err;
        //             throw err;
        //         } finally {
        //             loading.update({ loading: false });
        //         }
        //     }

        // });
        // main.appendChild(newTodo.renderDOM());

        const detailItem = new DetailItem({
            detailItem: [],

            // onRemove: async todo => {
            //     loading.update({ loading: true });
            //     error.textConent = '';

            //     try {
            //         await removeTodo(todo.id);

            //         const todos = this.state.todos;

            //         const index = todos.indexOf(todo);

            //         todos.splice(index, 1);

            //         todoList.update({ todos });
            //     }

            //     catch (err) {
            //         console.log(err);
            //     } finally {
            //         loading.update({ loading: false });
            //     }
            // }


        });
        main.appendChild(detailItem.renderDOM());
        // initial todo load:
        try {
            const detailItem = await getDetailItem();
            this.state.detailItem = detailItem;

            detailItem.update({ detailItem });

        } catch (err) {
            console.log('Article Details loading failed\n', err);
        }
        // finally {
        //     loading.update({ loading: false });
        // }

    }

    renderHTML() {
        return /*html*/ `
            <div>
                <!-- header goes here -->
                <!-- show errors: -->
                <p class="error"></p>
                <main>

                </main>
            </div>
        `;
    }
}

export default DetailApp;
