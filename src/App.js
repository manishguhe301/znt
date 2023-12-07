import LeftNavigation from './LeftSection.js/LeftNavigation';
import RightSection from './RightSection/RightSection';

export default function App() {
  return (
    <div className='flex'>
      <LeftNavigation />
      <RightSection/>
    </div>
  );
}
