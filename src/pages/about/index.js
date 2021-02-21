import React from 'react';
import Hero from '@/components/hero';
import PropTypes from 'prop-types';

class AboutPage extends React.Component {
  render() {
    const { title, subTitle, photo } = this.props;

    return (
      <div>
        <Hero title={title} subTitle={subTitle} photo={photo} />
        <p>
          My name is Alessandro Palumbo, but people use to call me just Alex or
          P
        </p>

        <p>
          Need a bit more time to fill this page sorry
          <span role="img" aria-label="embarassed emoji">
            😅
          </span>
        </p>
      </div>
    );
  }
}

AboutPage.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  photo: PropTypes.any,
};

export default AboutPage;
