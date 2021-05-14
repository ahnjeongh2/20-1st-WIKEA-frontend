/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './SideModal.scss';

class SideModal extends Component {
  render() {
    const { direction, children, on, handleSideModalOn } = this.props;
    return (
      <div className={on ? 'side_modal_box on' : 'side_modal_box'}>
        <div className="dimmer" onClick={handleSideModalOn} />
        <aside className={`side_modal ${direction}`}>
          <button type="button" className="close" onClick={handleSideModalOn}>
            <i className="ic-close" />
          </button>
          {children}
        </aside>
      </div>
    );
  }
}

export default SideModal;
