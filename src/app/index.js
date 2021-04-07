import MainWrapper from './components/MainWrapper';
import MainHeader from './components/MainHeader';
import SliderSection from './components/SliderSection';
import { images } from '../data';

function App() {
  return (
    <MainWrapper>
      <MainHeader />
      <SliderSection width={640} height={400} images={images} />
    </MainWrapper>
  );
}

export default App;
