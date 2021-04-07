import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainWrapper from '.';

describe('MainWrapper', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <MainWrapper>
        <p>Lorem Ipsum</p>
      </MainWrapper>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
