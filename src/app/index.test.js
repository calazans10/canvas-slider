import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '.';

describe('App', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
