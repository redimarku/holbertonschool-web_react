import useLogin from "../hooks/useLogin";
import "./Login.css";

function Login(props) {
    const {
        email,
        password,
        enableSubmit,
        handleChangeEmail,
        handleChangePassword,
        handleLoginSubmit,
    } = useLogin(props.login);  // ✅ call the hook, passing the login prop as callback

    return (
        <div className="App-body">
            <p>Login to access the full dashboard</p>

            <form onSubmit={handleLoginSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}               // ✅ top-level value, not onLogin.formData.email
                    onChange={handleChangeEmail}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}            // ✅ top-level value, not onLogin.formData.password
                    onChange={handleChangePassword}
                />
                <input type="submit" value="OK" disabled={!enableSubmit} />
            </form>
        </div>
    );
}

export default Login;