import React from 'react';

import './Header.css';

const Header = React.createClass({
  displayName: 'Header',

  render() {
    return (
      <div className="Header">
        Lets play a memory game!
      </div>
    );
  }
})

export default Header;
