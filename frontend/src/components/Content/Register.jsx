import '../Web.css';

export default function Register () {
    return( 
        <div className="register-container">
      <form>
        <h2>Registro</h2>
        <div className="form-group">
          <label htmlFor="firstName">Nombre:</label>
          <input type="text" id="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Apellido:</label>
          <input type="text" id="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Nickname:</label>
          <input type="text" id="nickname" required />
        </div>
        <div className="form-group">
          <input type="checkbox" id="vegetarian" className="custom-checkbox" />
          <label htmlFor="vegetarian" className="custom-checkbox-label">Vegetarianx</label>
        </div>
        <div className="form-group">
          <input type="checkbox" id="vegan" className="custom-checkbox" />
          <label htmlFor="vegan" className="custom-checkbox-label">Veganx</label>
        </div>
        <div className="form-group">
          <input type="checkbox" id="celiac" className="custom-checkbox" />
          <label htmlFor="celiac" className="custom-checkbox-label">Celiacx</label>
        </div>
        <button type="submit" className="button-register">Registrar</button>
      </form>
    </div>
    )
}