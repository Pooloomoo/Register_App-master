import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';

export function MenuItem({ item }) {
  const [subnav, setSubnav] = useState(false);
  const active = 'active';
  const showSubnav = () => setSubnav(!subnav);

  const renderSubnav = () => {
    //console.log('renderSubnav ', subnav, item.subNav);
    return (
      <ul className={`subList ${subnav ? '' : 'collapse'}`}>
        {item.subNav.map((subitem, index) => {
          return (
            <Fragment key={index}>
              <MenuItem item={subitem} />
            </Fragment>
          );
        })}
      </ul>
    );
  };

  if (item.isGroupHeader) {
    return (
      <li className="sidebar-header">
        {item.title}
        <i className="material-icons-outlined">{item.icon}</i>
      </li>
    );
  }

  return (
    <li className={`nav-item `}>
      <NavLink className={`nav-link ${active ? '' : 'active'}`} to={item.path ? item.path : '#'}  onClick={item.subNav && showSubnav}>
        <i className="material-icons-outlined">{item.icon}</i>
        <span className="link-text">{item.title}</span>
        {item.subNav && subnav ? (
          <i className="material-icons-outlined">{item.iconOpened}</i>
        ) : item.subNav ? (
          <i className="material-icons-outlined">{item.iconClosed}</i>
        ) : null}
      </NavLink>

      {item.subNav && renderSubnav()}
    </li>
  );
}
