import Component from '../Component.js';

class SignUp extends Component {

    onRender(form) {
        const onSignUp = this.props.onSignUp;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const user = {
                displayName: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password')
            };

            onSignUp(user);
        });
    }

    renderHTML() {
        return /*html*/`
            <fieldset>
        <legend>Get Your News On</legend>
    <form class="auth-form standard">
       
        <p>
            <label for="name">Name</label>
            <input id="name" name="name" required placeholder="Your Name">
        </p>
    
        <p>
            <label for="email">Email</label>
            <input id="email" type="email" name="email" required placeholder="you@somewhere.com">
        </p>
    
        <p>
            <label for="password">Password</label>
            <input id="password" type="password" name="password" required>
        </p>
        <p>
            <button class="sign-up">Sign Up</button>
        </p>
    </form>
    </fieldset>
        `;
    }
}

export default SignUp;