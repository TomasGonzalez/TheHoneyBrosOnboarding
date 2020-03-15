import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.jpg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='footer has-background-black has-text-white-ter'>
        <div
          style={{ color: "orange", fontSize: "28px", fontWeight: "bold" }}
          className='content has-text-centered'
        >
          {/* <img
            src={logo}
            alt='The Honey Bros.'
            style={{ width: "14em", height: "10em" }}
          /> */}
          The Honey Bros.
        </div>
        <div className='content has-text-centered has-background-black has-text-white-ter'>
          <div className='container has-background-black has-text-white-ter'>
            <div className='columns'>
              <div className='column is-4'>
                <section className='menu'>
                  <ul className='menu-list'>
                    <li>
                      <Link to='/' className='navbar-item'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/about'>
                        About
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li> */}
                    <li>
                      <a
                        className='navbar-item'
                        href='/admin/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='column is-4'>
                <section>
                  <ul className='menu-list'>
                    <li>
                      Email us at:
                      <br /> tomas@thehoneybros.com
                    </li>
                    <li>
                      Contact us: <br />
                      829-962-5900 • 829-643-5045
                    </li>
                  </ul>
                </section>
              </div>
              <div className='column is-4 social'>
                {/* <a title='facebook' href='https://facebook.com'>
                  <img
                    src={facebook}
                    alt='Facebook'
                    style={{ width: "1em", height: "1em" }}
                  />
                </a> */}
                {/* <a title='twitter' href='https://twitter.com'>
                  <img
                    className='fas fa-lg'
                    src={twitter}
                    alt='Twitter'
                    style={{ width: "1em", height: "1em" }}
                  />
                </a> */}
                <a
                  title='instagram'
                  href='https://www.instagram.com/thehoneybrosfarm/'
                >
                  <img
                    src={instagram}
                    alt='Instagram'
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
