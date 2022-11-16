import './../styles/components/login.sass';

function Login() {
   
    return (
        <div className="row">
            <form className="col s10 offset-s1">
            <div className="row headerLogin">
                Olá! Seja bem vindo a nossa plataforma.
            </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="text" type="email" className="validate" required />
                    <label for="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="password" type="password" className="validate" required/>
                    <label for="password">Password</label>
                    </div>
                </div>

                <button className="btn waves-effect waves-light" type="submit" name="action" value="Enviar">Entrar
                    <i className="material-icons right">send</i>
                </button>
            </form>

        </div>
    )
}
export default Login;