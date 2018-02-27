import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
  return (
    <div>
      <h2>Hello world!</h2>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

Home.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
