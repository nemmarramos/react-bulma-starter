import React from 'react';

class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar"
          aria-label="main navigation"
          style={{
            borderBottom: 'solid 1px #dddddd',
          }}>
        <div className="navbar-brand">
          <a className="navbar-item">
            <img
              style={{
                marginRight: 8
              }}
              src="https://lh3.ggpht.com/nZ_yGtXv4Gcputi4796AUjVhSWUT_caaY6_oK2JQisDiWEtcpIbXDiA5uZV2Q5qZE-2D=s180-rw"
              width="30px" alt="" />
            <span>Courseware</span>
          </a>
          <span></span>
          {/* <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button> */}
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <a className="navbar-item">
              <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                <i className="fas fa-book"></i>
              </span>
              Courses
            </a>
            <a className="navbar-item">
              <span className="icon" style={{ marginRight: 5 }}>
                <i className="fab fa-lg fa-medium"></i>
              </span>
              Medium
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" >
                Projects
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Overview
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  This Site
                </a>
                <a className="navbar-item" >
                  Angular The React Way
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
            </div>
            <div className="navbar-item">
              <a class="button is-primary">Login</a>
              <a class="button is-primary is-inverted">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
