import { ReactNode } from 'react';
import './SwiperEaseSlide.css';

interface ISwiperEaseSlideProps {
  children: ReactNode;
}

const SwiperEaseSlide = ({ children }: ISwiperEaseSlideProps) => {
  return <div className="swiperEaseSlide">{children}</div>;
};

export default SwiperEaseSlide;
