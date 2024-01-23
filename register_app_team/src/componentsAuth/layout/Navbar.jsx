import React, { useRef } from 'react';
import { userContext } from '../../util/userContext';

function Navbar({ toggleSidebar, onLogout }) {
  const notiRef = useRef();
  const userRef = useRef();

  const toggleNotiDropdown = (event) => {
    //console.log(event.target.dataset.toggle);
    notiRef.current.classList.toggle('dropdown--active');
    //console.log(notiRef.current);
  };

  const toggleUserDropdown = () => {
    userRef.current.classList.toggle('dropdown--active');
  };

  return (
    <header className="header">
      <button className="header__menu" onClick={toggleSidebar}>
        <i className="material-icons-outlined">menu</i>
      </button>

      <div className="header__search">
        
      </div>
      <div className="header-right">
        <div className="header-noti header-right-menu">
          <a onClick={toggleNotiDropdown}>
            <i className="material-icons-outlined">notifications</i>
          </a>
          <div ref={notiRef} id="noti-dropdown" className="dropdown">
            <ul className="dropdown__list">
              <li className="dropdown__list-item">Item 1</li>
              <li className="dropdown__list-item">Item 2</li>
              <li className="dropdown__list-item">Item 3</li>
            </ul>
          </div>
        </div>
        <userContext.Consumer>
          {({ user }) => {
            //console.log(user);
            return (
              <div id="header-avater" className="header-right-menu">
                <a onClick={toggleUserDropdown}>
                  <img src="/img/avatars/avatar-4.jpg" alt="avatar" />
                </a>

                <div ref={userRef} id="avatar-dropdown" className="dropdown">
                  <ul className="dropdown__list">
                    <li className="dropdown__list-item">
                      <span className="dropdown__icon">
                        <i className="far fa-user"></i>
                      </span>
                      <span className="dropdown__title">{user.name}</span>
                    </li>
                    <li className="dropdown__list-item">
                      <span className="dropdown__icon">
                        <i className="fas fa-clipboard-list"></i>
                      </span>
                      <span className="dropdown__title">{user.email}</span>
                    </li>
                    <li className="dropdown__list-item">
                      <span className="dropdown__icon">
                        <i className="fas fa-sign-out-alt"></i>
                      </span>
                      <span className="dropdown__title" onClick={onLogout}>log out</span>
                    </li>
                  </ul>
                </div>
              </div>
            );
          }}
        </userContext.Consumer>
      </div>
    </header>
  );
}

export default Navbar;
