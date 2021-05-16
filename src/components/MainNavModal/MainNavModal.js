/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideModal from '../SideModal/SideModal';
import AsideNav from '../AsideNav/AsideNav';
import { API } from '../../config';
import './MainNavModal.scss';

class MainNavModal extends Component {
  SUB_CATEGORY = {};

  constructor() {
    super();
    this.state = {
      isSubCategoryOn: false,
      activeSubCategory: '',
      categories: [],
    };
  }

  componentDidMount() {
    fetch(API.CATEGORY)
      .then(categories => categories.json())
      .then(res => {
        this.setState({
          categories: res.category_list,
        });
        this.SUB_CATEGORY = res.sub_category_list;
      });
  }

  handleSubMenuClick = e => {
    e.preventDefault();
  };

  handleSubNavOn = e => {
    const { name } = e.target;
    e.preventDefault();
    this.setState({
      isSubCategoryOn: true,
      activeSubCategory: name,
    });
  };

  render() {
    const { isSubCategoryOn, activeSubCategory, categories } = this.state;
    return (
      <SideModal direction="left" on={true}>
        <Link to="/" className="main_nav_logo">
          <img alt="wikea logo" src="http://placehold.it/90x36" />
        </Link>
        <div className="main_nav_box">
          <AsideNav
            type="main"
            on={isSubCategoryOn}
            title="모든 제품"
            list={categories}
            handleClick={this.handleSubNavOn}
          >
            <div className="menu_promotion">
              <span>최근 본 제품</span>
              <ul className="promotion_list">
                <li>
                  <Link to="/">
                    <img
                      alt="탁자"
                      src="https://www.ikea.com/kr/ko/images/products/voxloev-dining-table-light-bamboo__0997396_pe822660_s5.jpg?f=xxxs"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </AsideNav>
          {isSubCategoryOn && (
            <AsideNav
              type="sub"
              on={isSubCategoryOn}
              title={activeSubCategory}
              list={this.SUB_CATEGORY[activeSubCategory]}
              handleClick={this.handleSubMenuClick}
            >
              <div className="menu_promotion">
                <Link to="/">
                  <span className="promotion_image">
                    <img
                      alt="지속가능한 LED 전구 구매 가이드"
                      src="https://www.ikea.com/images/led-e6fd0a8b05e35175cd665abc61b80d61.jpg?f=xxxl"
                    />
                  </span>
                  <span>지속가능한 LED 전구 구매 가이드</span>
                </Link>
              </div>
            </AsideNav>
          )}
        </div>
      </SideModal>
    );
  }
}

export default MainNavModal;
