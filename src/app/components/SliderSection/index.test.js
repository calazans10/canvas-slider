import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { images } from '../../../data';
import SliderSection from '.';

describe('SliderSection', () => {
  test('renders without crashing', async () => {
    const wrapper = shallow(<SliderSection width={640} height={400} images={images} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
