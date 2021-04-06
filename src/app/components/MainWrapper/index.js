import PropTypes from 'prop-types';
import Wrapper from './style';

function MainWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

MainWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainWrapper;
