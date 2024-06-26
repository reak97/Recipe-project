import '../Web.css'

export default function Login (){
    return(
        <div className="login-container">
        <form>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" required />
          </div>
          <div className="form-group">
            <input type="checkbox" className='custom-checkbox' />
            <label>
              Recuérdame
            </label>
          </div>
          <button type="submit" className='button-login'>Login</button>
          <div className="forgot-password">
            <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </div>
    )
}