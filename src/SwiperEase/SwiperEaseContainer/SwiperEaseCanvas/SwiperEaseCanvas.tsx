import { ReactNode, useContext } from 'react';
import { ActiveSlideContext } from '../../SwiperEase';
import './SwiperEaseCanvas.css';

interface ISwiperEaseCanvasProps {
  children: ReactNode;
  gap: number;
  width: number;
}

const SwiperEaseCanvas = ({ children, gap, width }: ISwiperEaseCanvasProps) => {
  const activeSlide = useContext(ActiveSlideContext);
  const countSliders = (children as []).length ? (children as []).length : 1;
  const calcWidth = 100 / countSliders;
  const calcGap = gap / countSliders;

  return (
    <div
      className="swiperEaseCanvas"
      style={{
        gridTemplateColumns: `repeat(${countSliders}, ${width}px)`,
        transform: `translateX(calc((-${calcWidth}% - ${calcGap}px) * ${activeSlide}))`,
        gap: `${gap}px`,
      }}>
      {children}
    </div>
  );
};

export default SwiperEaseCanvas;
