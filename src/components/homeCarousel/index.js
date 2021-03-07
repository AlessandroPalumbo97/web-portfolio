import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';
import { CARD_ITEMS } from './PageContent';
import Card from '@/components/homeCarousel/card';
import { Row } from 'antd';

class HomeCarousel extends React.Component {
  handleCardClick = (id, card) => {
    const itemsList = [...CARD_ITEMS];

    CARD_ITEMS[id].selected = !CARD_ITEMS[id].selected;

    itemsList.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      itemsList,
    });
  };

  makeItemsList = (itemsList) => {
    return itemsList.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <Row className={styles.carouselWrapper}>
          {this.makeItemsList(CARD_ITEMS)}
        </Row>
      </div>
    );
  }
}

HomeCarousel.propTypes = {
  itemsList: PropTypes.any,
};

export default HomeCarousel;