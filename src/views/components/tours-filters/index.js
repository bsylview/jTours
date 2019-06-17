import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import classNames from 'classnames';
import { Order } from 'core/tours/tour';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';
import ReactStars from 'react-stars';

export class ToursFilters extends Component {
  rating = 0;
  constructor() {
    super(...arguments);
    this.state = {
      isOpen: false
    };
  }

  openModal() {
    this.setState({
      isOpen: true
    });
    this.rating = 0;
  }

  hideModal() {
    this.setState({
      isOpen: false
    });
    this.rating = 0;
  }

  applyFilters() {
    browserHistory.push({pathname: '/', query: {filter: 'rating', rating: this.rating}});
    this.hideModal();
  }

  ratingChanged = newRating => {
    this.rating = newRating;
  }

  renderMenu(query) {
    return (
      <div className="container-fluid filter-container">
        <button className="btn btn-secondary" title="View all items">
          <Link className={classNames({sort: !query})} to="/">
            <i className="material-icons">view_list</i>
          </Link>
        </button>
        <button className="btn btn-secondary" title="Filter by rating" onClick={this.openModal.bind(this)}>
          <i style={{color: '#0275d8'}} className="material-icons">&#xE152;</i>
        </button>

       <Modal className="modal-filters" isOpen={this.state.isOpen} size="modal-lg" onRequestHide={this.hideModal.bind(this)}>
         <ModalHeader>
           <ModalClose onClick={this.hideModal.bind(this)} />
           <ModalTitle>Filters</ModalTitle>
         </ModalHeader>
         <ModalBody>
           Filter by rating
           <div className="stars-filter">
             <ReactStars count={5} onChange={this.ratingChanged.bind(this)} size={24} color2={'#FFC101'} />
           </div>
         </ModalBody>
         <ModalFooter>
           <button className="btn btn-default" onClick={this.hideModal.bind(this)}>
             Close
           </button>
           <button className="btn btn-primary" onClick={this.applyFilters.bind(this)}>
             Apply filters
           </button>
         </ModalFooter>
       </Modal>

      </div>
    );
  }
  // <Link activeClassName="active" to={{pathname: '/',  query: {filter:'rating', rating: 5}}}>
  //   <i className="material-icons">&#xE152;</i>
  // </Link>

  render() {
    const { query } = this.props;
    return (
      <div>
        {this.renderMenu(query)}
      </div>
    );
  }
}

//

ToursFilters.propTypes = {
  query: PropTypes.string
};

export default ToursFilters;
