import React from 'react';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb';
import ItemDetails from './ItemDetails/ItemDetails';
import ItemImg from './ItemImg/ItemImg';
import ItemInfo from './ItemInfo/ItemInfo';
import './Main.scss';

class Main extends React.Component {
  render() {
    const { handleModal, handleSideModal, product, details } = this.props;
    return (
      <main className="main">
        <div className="grid-container">
          <Breadcrumb />
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-sm-4 col-md-12 col-lg-8 ">
              <ItemImg product={product} handleModal={handleModal} />
              <ItemDetails
                handleSideModal={handleSideModal}
                product={product}
                details={details}
              />
            </div>
            <div className="col-sm-4 col-md-12 col-lg-4 ">
              <ItemInfo product={product} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1 lg-only" />
            <div className="col-lg-12"></div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
