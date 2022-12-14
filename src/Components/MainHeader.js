import './MainHeader.css';
import mainLogo from "../Components/logo.svg";
import search from '../assets/search.svg';
import myPage from '../assets/myPage.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import SearchInput from './SearchInput';

// 메인페이지, 더보기페이지, 작품정보페이지, 마이페이지 공통헤더
class MainHeader extends React.Component {
  constructor(){
    super();
    this.state = {
      inputValue: {}
    }
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      inputValue: { ...this.state.inputValue, [name]: value },
    });
  };

  render(){
    const keyWord = this.state.inputValue.search;
  return (
    <>
      <div className='navbar-container'>
        <nav className="navbar">
          <div className="navbar-helper">
          </div>

          <div className="main-navbar-logo">
            <Link to="/main">
              <img src={mainLogo} alt="logo" />
            </Link>
          </div>
          <ul className="navbar-menu">
            <form>
              <SearchInput getInput={this.handleInput} />
              <Link to={`/search/${keyWord}`} state={{ keyword : keyWord}}>
                <button className="search-btn" type="submit">
                  <img
                    id='search-icon'
                    src={search}
                    alt="search" />
                </button>
              </Link>
            </form>
            <li className='icon-list'>
              <Link to="/mypage">
                <img id='mypage-icon' src={myPage} alt="myPage" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
  }
}

export default MainHeader;