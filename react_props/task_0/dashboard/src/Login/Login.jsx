import './Login.css';

const Login = () =>{
    return(
        <div className='App-body'>
        <p> Login to access the full dashboard</p>
        <form>
        <label htmlFor="email">email</label>
        <input type="email" id="email"  autoComplete="username"/>

        <label htmlFor="password">password</label>
        <input type="password" id="password" autoComplete="current-password"/>

        <button type="submit">OK</button>
        </form>
      </div>
    )
}

export default Login;