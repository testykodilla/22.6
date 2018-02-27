import React from 'react';
import { connect } from 'react-redux';

const About = () => {
  return (
    <div>
      <h2>About me</h2>
      <p>Mary-Kate Olsen (born June 13, 1986)[1] is an American fashion designer, businesswoman, author,</p>
      <p>and former actress and producer. She began her acting career one year after her birth, sharing the</p>
      <p>role of Michelle Tanner with her twin sister Ashley Olsen in the television sitcom, Full House (1987-1995).</p>
      <p>They also starred in numerous films together.</p>
      <img src="https://vignette.wikia.nocookie.net/twoofakind/images/a/aa/Mary-kate_as_michelle.jpg/revision/latest?cb=20110513211015" alt="merykejt" />
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
