import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Main = ({scrollToTop}) => {

  return(
    <Element name="main" className="element" >
      <div className="main-section">
        <h1>PORTFOLIO</h1>
        <h1>Main Section</h1>


        <a onClick={scrollToTop}>To the top!</a>
      </div>
    </Element>
  );
};

export default withRouter(Main);
