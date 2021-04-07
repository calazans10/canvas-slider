import PropTypes from 'prop-types';
import Slider from '../Slider';
import Section from './style';

function SliderSection({ width, height, images }) {
  return (
    <Section>
      <Slider width={width} height={height} images={images} />
      <Section.Aside>
        <Section.Text>Drag to change image</Section.Text>
      </Section.Aside>
    </Section>
  );
}

SliderSection.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SliderSection;
