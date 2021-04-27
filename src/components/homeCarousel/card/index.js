import React from 'react';
import PropTypes from 'prop-types';
import { Card, Divider } from 'antd';
import styles from './index.less';
import LinkedButton from '@/components/linkedButton';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Meta } = Card;

function MyCard(props) {
  const { item } = props;
  const { title, subTitle, imgSrc, link } = item;

  return (
    <Card bordered={false} className={styles.cardWrapper}>
      <img className={styles.cardImage} src={imgSrc} alt={imgSrc} />
      <Meta className={styles.cardMeta} title={title} description={subTitle} />
      <div className={styles.cardButtonWrapper}>
        <LinkedButton link={link} rounded size="large" type="primary" gradient>
          Scopri di più <ArrowRightOutlined />
        </LinkedButton>
      </div>
    </Card>
    // <div
    //   className={styles.cardWrapper}
    //   onClick={(e) => click(item)}
    // >
    //   <img
    //     className={styles.cardImage}
    //     src={imgSrc}
    //     alt={imgSrc}
    //   />
    //   {selected && (
    //     <CardInfo
    //       title={title}
    //       subTitle={subTitle}
    //       link={link}
    //       downloadable={downloadable}
    //     />
    //   )}
    // </div>
  );
}

MyCard.propTypes = {
  item: PropTypes.object,
  click: PropTypes.any,
};

export default MyCard;
