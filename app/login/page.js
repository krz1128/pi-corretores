export default function Login() {
    return (
        <div>
            <div class="loginCadastro"> Faça o Login</div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>

            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Senha"/>

            </div>
            <button type="button" class="btn btn-primary btn-sm">Entrar</button>
        </div>
       
    )
}