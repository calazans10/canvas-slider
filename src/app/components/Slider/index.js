import PropTypes from 'prop-types';
import { Layer } from 'react-konva';
import Image from '../Image';
import { getNewPosition } from '../../../helpers';
import SliderStyle from './style';

function Slider({ width, height, images }) {
  const dragBoundaryLimit = width * (images.length - 1) * -1;

  return (
    <SliderStyle width={width} height={height}>
      <Layer draggable dragBoundFunc={(pos) => getNewPosition(pos, dragBoundaryLimit)}>
        {images.map((image, index) => {
          const position = width * index;

          return (
            <Image
              key={`${position}-${image}`}
              src={image}
              position={position}
              sliderWidth={width}
              sliderHeight={height}
            />
          );
        })}
      </Layer>
    </SliderStyle>
  );
}

Slider.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
