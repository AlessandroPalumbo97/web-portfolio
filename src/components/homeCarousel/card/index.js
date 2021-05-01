import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import './index.less';
import LinkedButton from '@/components/linkedButton';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Meta } = Card;

class FlippableCard extends PureComponent {
  state = {
    isFlipped: false,
  };

  toggleCardFlipped = (f) => {
    this.setState({ isFlipped: f });
  };

  render() {
    const classNames = require('classnames');
    const { isFlipped } = this.state;
    const { item } = this.props;
    const { title, subTitle, imgSrc, link } = item;

    return (
      <div className="scene">
        <div
          className={classNames({
            card: true,
            isFlipped: isFlipped,
          })}
          onMouseEnter={() => this.toggleCardFlipped(true)}
          onMouseLeave={() => this.toggleCardFlipped(false)}
        >
          <Card className={classNames('cardFace', 'cardFront')}>
            <img className="cardImage" src={imgSrc} alt={imgSrc} />
            <Meta className="cardTitle" title={title} />
          </Card>

          <Card className={classNames('cardFace', 'cardBack')}>
            <img className="cardBg" src={imgSrc} alt={imgSrc} />
            <div className="cardBackWrapper">
              <Meta className="cardDescription" description={subTitle} />
              <div className="cardButtonWrapper">
                <LinkedButton link={link} rounded size="large" type="primary">
                  Scopri di più <ArrowRightOutlined />
                </LinkedButton>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

FlippableCard.propTypes = {
  item: PropTypes.object,
  click: PropTypes.any,
};

export default FlippableCard;
