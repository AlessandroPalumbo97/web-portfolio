import React from 'react';
import Slot from '@/components/slot/Slot';
import {Row, Col, Button, Dropdown, Menu} from 'antd';
import styles from './Salvinification.less';

const Salvinification = (props) => {
  return (
    <>
      <Row className={ styles.flag }>
        <Col
          sm={ 0 }
          md={ 8 }
          className={ styles.flagGreen }
        />
        <Col
          sm={ 0 }
          md={ 8 }
          className={ styles.flagWhite }
        />
        <Col
          sm={ 0 }
          md={ 8 }
          className={ styles.flagRed }
        />
      </Row>
      <h1>Salvinification</h1>
      <Slot />
    </>
  );
};

export default Salvinification;
