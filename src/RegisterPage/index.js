import { signUp } from '../functions/auth.js';

export const RegisterPage = (props) => {
  const { error, session } = props;

  if (session) {
    window.location.href = '/';
  }

  let alert = '';

  if (error !== undefined) {
    alert = `<div class="alert">${error}</div>`;
  }

  const element = document.createElement('div');
  element.classList.add('page');
  element.innerHTML = `
    <div class="container">
      <h1>Registrovat</h1>
      ${alert}
      <form>
        <label class="form-field">
          E-mail: <input class="email-input" type="email" />
        </label>
        <label class="form-field">
          Heslo: <input class="password-input" type="password" />
        </label>
        <button type="submit">Registrovat</button>
      </form>
    </div>
  `;

  element.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = element.querySelector('.email-input').value;
    
    const password = element.querySelector('.password-input').value;

    signUp(email, password).then((response) => {
      const { data, error } = response;
      console.log(data, error);
      if (error) {
        element.replaceWith(RegisterPage({ error: error.message }));
      } else {
        window.location.href = '/';
      }
    });
  });

  return element;
};
