import Component from '../Component.js';
import Header from '../common/Header.js';
// import Loading from '../common/Loading.js';
// import AddTodo from './AddTodo.js';
import FrontPageList from './FrontPageList.js';
import { getFrontPage } from '../services/domain-api.js';

class FrontPageApp extends Component {

    async onRender(dom) {
        const header = new Header({ title: 'My News' });
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
        
        const frontPageList = new FrontPageList({ 
            frontPageItems: [],

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
        main.appendChild(frontPageList.renderDOM());
        // initial todo load:
        try {
            const frontPageItems = await getFrontPage();
            this.state.frontPageItems = frontPageItems;

            frontPageList.update({ frontPageItems });
            
        }
        catch (err) {
            console.log('Update News List failed\n', err);
        }
        // finally {
        //     loading.update({ loading: false });
        // }

    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <!-- show errors: -->
                <p class="error"></p>
                <main class="grid-container">
                    <!-- add todo goes here -->
                    <!-- todo list goes here -->
                </main>
            </div>
        `;
    }
}

export default FrontPageApp;