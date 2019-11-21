import Component from '../Component.js';

class Loading extends Component{
    renderHTML(){
        const loading = this.props.loading;
        if (!loading){
            return `<div></div>`;
        }

        return `<div class="loading-container"> <img src="../assets/loading.gif"></div>`;
    }
}

export default Loading;