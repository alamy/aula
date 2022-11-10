import './Login.css'

function Login() {
    return (
        <div class="row">
            <form class="col s10 offset-s1">
            <div class="row headerLogin">
                Olá! Seja bem vindo a nossa plataforma.
            </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input id="email" type="email" class="validate" required />
                    <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input id="password" type="password" class="validate" required maxLength={8} />
                    <label for="password">Password</label>
                    </div>
                </div>

                <button class="btn waves-effect waves-light" type="submit" name="action">Entrar
                    <i class="material-icons right">send</i>
                </button>
            </form>
        </div>
    )
}
export default Login;