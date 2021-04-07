import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { images } from '../../../data';
import Slider from '.';

describe('Slider', () => {
  test('renders without crashing', async () => {
    const wrapper = shallow(<Slider width={640} height={400} images={images} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
