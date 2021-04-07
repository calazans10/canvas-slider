import PropTypes from 'prop-types';
import { Group, Image as KonvaImage, Rect } from 'react-konva';
import useImage from 'use-image';
import { getDrawImageParams } from '../../../helpers';

function Image({ src, position, sliderWidth, sliderHeight }) {
  const [image, status] = useImage(src);

  if (status !== 'loaded') {
    return null;
  }

  const { dx, dy, dWidth, dHeight } = getDrawImageParams(
    image,
    position,
    sliderWidth,
    sliderHeight
  );

  return (
    <Group>
      <Rect fill="#f2f2f2" width={sliderWidth} height={sliderHeight} x={position} y={0} />
      <KonvaImage image={image} x={dx} y={dy} width={dWidth} height={dHeight} />
    </Group>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  sliderWidth: PropTypes.number.isRequired,
  sliderHeight: PropTypes.number.isRequired,
};

export default Image;
