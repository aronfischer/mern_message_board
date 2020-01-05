import React from "react";

function Navigation() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='/'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='/message/add'>
                Add Message <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='/user/add'>
                Add User <span className='sr-only'>(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
