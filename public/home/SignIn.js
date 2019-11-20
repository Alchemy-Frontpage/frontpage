import Component from '../Component.js';

class SignIn extends Component {

    onRender(dom) {
        const onSignIn = this.props.onSignIn;
        const form = dom.querySelector('form');

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const credentials = {
                email: formData.get('email'),
                password: formData.get('password')
            };

            onSignIn(credentials);
        });
    }

    renderHTML() {
        return /*html*/`
          <fieldset>  
          <legend>Welcome Back</legend>
    <form class="auth-form standard">
        <p>
            <label for="signin-email">Email:</label>
            <input id="signin-email" type="email" name="email" required placeholder="you@somewhere.com">
        </p>

        <p>
            <label for="signin-password">Password:</label>
            <input id="signin-password" type="password" name="password" required>
        </p>
        <p>
            <button class="sign-in">Sign In</button>
        </p>
    </form>
    </fieldset>
    
        `;
    }
}

export default SignIn;
// <fieldset><legend>Welcome Back</legend></fieldset>