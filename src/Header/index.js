import { signOut } from '../functions/auth.js';
import './style.css';

export const Header = (props) => {
  const { session } = props;

  let userContent = `
    <nav>
      <a href="/register">Registrovat</a>
      <a href="/login">Přihlásit</a>
    </nav>
  `;

  if (session) {
    userContent = `<div>${session.user.email}<button class="btn-logout">Odhlásit</button></div>`;
  }

  const element = document.createElement('header');
  element.innerHTML = `
    <div class="container">  
      <nav>
        <a href="/">Domů</a>  
      </nav>
      <div class="user">
        ${userContent}
      </div>
    </div>
  `;

  const button = element.querySelector('.btn-logout');
  if (button) {
    button.addEventListener('click', () => {
      signOut().then((response) => {
        const { error } = response;
        if (error) {
          console.log(error);
        } else {
          window.location.href = '/login';
        }
      });
    });
  }

  return element;
};
