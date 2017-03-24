import React, { Component, PropTypes } from 'react';
import { Utils } from './utils';
import _ from 'lodash';

export class ItemImage extends Component {

  constructor() {
    super(...arguments);
  }

  render() {
    const { tour } = this.props;
    return (
      <div>
        {this.renderImage(tour)}
      </div>
    );
  }

  renderImage(tour) {
    let primaryPic = Utils.getPrimaryPic(tour);
    let primaryAvailableDate = Utils.getPrimaryDate(tour);
    return (
      <div className="tour-item-image">
        <div hidden={primaryAvailableDate.discount === undefined} className="tour-discount">
          <p className="tour-discount-text">{primaryAvailableDate.discount}</p>
        </div>
        <div className="tour-reviews-no">
          {tour.reviews} reviews
        </div>
        <div className="tour-rating">
          {this.renderRating(tour)}
        </div>
        <div className="tour-like">
          {this.renderHeartIcon()}
        </div>
        <img className="img-fluid justify-content-around align-items-stretch" alt={primaryPic.name} src={primaryPic.url} />
      </div>
    );
  }

  renderRating(tour) {
    let ok = Utils.isNumber(tour.rating);
    let fullStars = _.times(tour.rating, function() {
      return this.renderFullStar();
    }.bind(this));
    let halfStar = '';
    if (!ok) {
      halfStar = this.renderHalfStar();
    }
    return <div key={tour.id}>{fullStars}{halfStar}</div>;
  }

  renderFullStar() {
    return (
      <svg width="16px" height="15px" viewBox="0 0 16 15" version="1.1">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-469.000000, -325.000000)" fill="#FFC101">
            <g transform="translate(442.000000, 112.000000)">
              <g transform="translate(10.354090, 213.000000)">
                <polyline points="24.3351902 0 26.7322668 4.93875 32.0976801 5.73 28.2170508 9.5725 29.134268 15 24.3351902 12.4375 19.5311878 15 20.4508674 9.5725 16.5665446 5.73 21.9319579 4.93875 24.3351902 0" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }

  renderHalfStar() {
    return (
      <svg width="16px" height="15px" viewBox="0 0 16 15" version="1.1">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-469.000000, -325.000000)" fill="#FFC101">
            <g transform="translate(442.000000, 112.000000)">
              <g transform="translate(10.354090, 213.000000)">
                <polyline fill="#FFFFFF" points="24.3351902 0 26.7322668 4.93875 32.0976801 5.73 28.2170508 9.5725 29.134268 15 24.3351902 12.4375 19.5311878 15 20.4508674 9.5725 16.5665446 5.73 21.9319579 4.93875 24.3351902 0" />
                <polyline points="24.3351902 12.4375 19.5311878 15 20.4508674 9.5725 16.5665446 5.73 21.9319579 4.93875 24.3351902 0" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }

  renderHeartIcon() {
    return (
      <svg width="30px" height="28px" viewBox="0 0 30 28" version="1.1">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-546.000000, -217.000000)">
            <g transform="translate(442.000000, 112.000000)">
              <g transform="translate(104.576313, 105.000000)">
                <g transform="translate(0.000000, 0.525000)">
                  <g>
                    <path d="M28.384459,9.34138117 C28.454846,8.93952932 28.4936803,8.5272963 28.4936803,8.10635648 C28.4936803,4.04932716 25.0884037,0.76050463 20.8877189,0.76050463 C18.213358,0.76050463 15.8628469,2.09498765 14.5067694,4.11094444 C13.150692,2.09498765 10.8001808,0.760169753 8.12581996,0.760169753 C3.92513515,0.760169753 0.519858584,4.04899228 0.519858584,8.1060216 L0.519858584,8.10635648 C0.519858584,8.10736111 0.520205318,8.10870062 0.520205318,8.11004012 C0.520205318,8.52830093 0.558692814,8.93752006 0.628386388,9.33702778 C1.89396621,16.8878241 14.0161405,26.2442747 14.4984478,26.6143133 L14.4984478,26.6267037 C14.4984478,26.6267037 14.5022619,26.6236898 14.5067694,26.620341 C14.511277,26.6236898 14.515091,26.6267037 14.515091,26.6267037 L14.515091,26.6143133 C14.9973983,26.2442747 27.1147183,16.8915077 28.384459,9.34138117" fillOpacity="0.3" fill="#333333" />
                    <path d="M8.12575062,1.26265201 C4.21874967,1.26265201 1.03989053,4.33246528 1.03989053,8.10618904 C1.04023727,8.48593904 1.07456395,8.87104707 1.14113692,9.25347608 C2.27773162,16.0337215 12.5230337,24.4089838 14.5067001,25.9748665 C16.4907132,24.4086489 26.7318544,16.0370702 27.871223,9.26084336 C27.9391829,8.87171682 27.9735096,8.48426466 27.9735096,8.10618904 C27.9735096,4.33280015 24.7949972,1.26265201 20.8879963,1.26265201 C18.480274,1.26265201 16.2580545,2.42969676 14.9428917,4.38470602 C14.8468463,4.52736343 14.682841,4.61309182 14.5067001,4.61309182 C14.3309058,4.61309182 14.1665538,4.52736343 14.0708552,4.38437114 C12.7560391,2.42969676 10.5334729,1.26265201 8.12575062,1.26265201 M14.5067001,27.1248326 L14.4886699,27.1248326 C14.4144688,27.1231582 14.3409611,27.1064144 14.2726545,27.0739313 C14.2137097,27.0458017 14.1613528,27.0082955 14.118011,26.9634221 C13.0746878,26.1567045 1.37934332,16.9603248 0.114803693,9.41723071 C0.0388689037,8.98323071 3.46734193e-05,8.5421983 3.46734193e-05,8.11020756 C-0.000312060779,3.77857948 3.6452513,0.258022377 8.12575062,0.258022377 C10.6361062,0.258022377 12.9706676,1.3641196 14.5067001,3.24913966 C16.0430793,1.3641196 18.3776407,0.258022377 20.8879963,0.258022377 C25.3684956,0.258022377 29.0137122,3.77891435 29.0137122,8.10618904 C29.0137122,8.54052392 28.9745312,8.98423534 28.8972095,9.42526775 C27.6257352,16.9867801 15.8679785,26.212294 14.886374,26.9707894 C14.8440724,27.0133187 14.7941427,27.0484807 14.7376251,27.0742662 C14.6641174,27.1080887 14.585062,27.1248326 14.5067001,27.1248326" fill="#FFFFFF" />
                  </g>
                </g>
              </g>
            </g>
          </g>
      </g>
      </svg>
    );
  }

}

ItemImage.propTypes = {
  tour: PropTypes.object.isRequired
};

export default ItemImage;
