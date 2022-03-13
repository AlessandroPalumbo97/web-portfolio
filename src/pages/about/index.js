import React from 'react';
import { Row, Col } from 'antd';
import styles from './index.less';
import PropTypes from 'prop-types';

const AboutPage = () => {
  return (
    <div>
      <Row className={styles.container}>
        <Col xs={24}>
          <p>
            My Name is Alessandro Palumbo and I was born in Milan in 1997. I
            like to call myself a "nerd", but i have many habits and i love
            technology, videogames, 3D print and much more :)
          </p>
          <p>
            In July 2020 I got my degree from European Institute of Design of
            Milan in Media Design. There, I started showing interest in design,
            photography, videoediting, 3D print and a bit of robotics.
          </p>
          <p>
            From November 2020 I am employed as a software developer at FME
            Education
          </p>
          <p>
            I made a lot of different experiences through these years of life,
            but I still feel like my journey is at the beginning :).
          </p>
          <p>
            For any other information, to ask for a collaboration, or just to
            have a conversation, don’t hesitate to write me at{' '}
            <a href="mailto:mr.alessandropalumbo@gmail.com">
              mr.alessandropalumbo@gmail.com.
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
};

AboutPage.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  photo: PropTypes.any,
};

export default AboutPage;
