import React from 'react';
import { Row } from 'antd';
import styles from './index.less';
import PropTypes from 'prop-types';

const AboutPage = () => {
  return (
    <div>
      <Row className={styles.container}>
        <p>
          My Name is Alessandro Palumbo and I was born in Milan in 1997. Friends
          used to call me Alex, or just “P”.
        </p>
        <p>
          I started play Doom on Windows97 when I was four and fell In love with
          it. Few years later, I started watching my daddy programming Java.
        </p>
        <p>
          So my curiosity for videogames and technology grew up year by year.
        </p>
        <p>
          In July 2020 I got my degree from European Institute of Design of
          Milan in Media Design with a mark of 109/110.
        </p>
        <p>
          There, I started showing interest in design, photography,
          videoediting, 3D print and a bit of robotics.
        </p>
        <p>
          From November 2020 I am employed as a software developer at FME
          Education
        </p>
        <p>
          I made a lot of different experiences through these years of life, but
          I still feel like my journey is at the beginning :).
        </p>
        <p>
          For any other information, to ask for a collaboration, or just to
          converse, don’t hesitate to write me at
          mr.alessandropalumbo@gmail.com.
        </p>
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
