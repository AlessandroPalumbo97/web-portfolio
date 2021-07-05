import React from 'react';
import styles from './index.less';
import { Row, Col } from 'antd';

import draw2 from '@/assets/images/aurora/draw2.png';
import building1 from '@/assets/images/aurora/building1.jpeg';
import building2 from '@/assets/images/aurora/building2.jpg';
import render3 from '@/assets/images/aurora/render3.png';
import render4 from '@/assets/images/aurora/render4.png';
import logo from '@/assets/images/aurora/aurora_logo.svg';
import MobileMenu from '@/components/mobileMenu';
import { MENU_ITEMS } from '@/settings/mainMenu/MenuItems';

const AuroraPage = (props) => {
  return (
    <div className={styles.auroraWrapper}>
      <div className={styles.auroraLogoWrapper}>
        <img className={styles.logo} src={logo} alt="aurora\'s logo" />
      </div>

      <div className={styles.auroraBodyWrapper}>
        <Row>
          <Col className={styles.auroraCol} md={24} lg={24}>
            <img
              className={styles.auroraPic}
              src={draw2}
              alt="aurora\'s draw 2"
            />
          </Col>
          <Col className={styles.auroraTextCol} md={24} lg={24}>
            <div className={styles.textWrapper}>
              <p>
                First thoughts were about the loneliness, the feeling of
                solitude...
              </p>
              <p>
                Solitude is reliable to premature death so much as obesity. Even
                United Kingdom established the solitude minister in 2008. One of
                the most common solutions for this complex problem is to own a
                domestic animal.
              </p>
              <p>
                Anyway, holding a pet can often be difficult for various
                reasons. Aurora was indeed born to achieve the goal of having an
                active company, without all its related responsibilities.
              </p>
            </div>
          </Col>
          <Col className={styles.auroraCol} md={24} lg={24}>
            <img
              className={styles.auroraPic}
              src={building1}
              alt="aurora\'s build process 1"
            />
          </Col>
          <Col className={styles.auroraTextCol} md={24} lg={24}>
            <div className={styles.textWrapper}>
              <p>
                So, after a long time of research about animals, robots, and
                persons, the design phase started. Aurora&apos;s body if fully
                3D printed, gears and joints included.
              </p>
              <p>
                Interactions are made possible by many different sensors linked
                to an Arduino Mega that makes Aurora capable of simulate dog's
                senses. The motion control is made through brushless DC motors
                and stepper motors, both managed by another Arduino Mega.
              </p>
              <p>
                Last but not least, Aurora has its decisional center inside of a
                Raspberry Pi 4. This makes the robot able to replicate a real
                brain and do things such as store memories, recognize objects,
                people and sounds, and simulate emotions and moods.
              </p>
            </div>
          </Col>

          <Col className={styles.auroraCol} md={24} lg={24}>
            <img
              className={styles.auroraPic}
              src={building2}
              alt="aurora\'s build process 2"
            />
          </Col>

          <Col className={styles.auroraTextCol} md={24} lg={24}>
            <div className={styles.textWrapper}>
              <h4>Aurora has:</h4>
              <ul>
                <li>28DOF (20 motorized)</li>
                <li>14 1kW brushless motors with custom gearboxes</li>
                <li>6 modified 28byj-48 stepper motors</li>
                <li>10Ah 24V Li-Po battery</li>
                <li>Original design modeled from scratch</li>
                <li>Custom link system to absorb shocks</li>
                <li>44 different sensors</li>
              </ul>
            </div>
          </Col>

          <Col className={styles.auroraCol} md={24} lg={24}>
            <img className={styles.auroraPic} src={render4} />
          </Col>

          <Col className={styles.auroraCol} md={24} lg={24}>
            <img
              className={styles.auroraPic}
              src={render3}
              alt="aurora\'s render 2"
            />
          </Col>
        </Row>
      </div>
      <div className={styles.auroraFooter}>
        <p>
          Aurora was made with the great{' '}
          <a href="http://www.leonardopaglia.com/">Leonardo Paglia</a>
        </p>
      </div>
    </div>
  );
};

export default AuroraPage;
