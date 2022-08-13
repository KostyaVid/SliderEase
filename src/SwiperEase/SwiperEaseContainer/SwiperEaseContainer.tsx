import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import SwiperEaseCanvas from './SwiperEaseCanvas/SwiperEaseCanvas';
import './SwiperEaseContainer.css';

interface ISwiperEaseContainerProps {
  children: ReactNode;
  gap: number;
}

const SwiperEaseContainer = ({ children, gap }: ISwiperEaseContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    setWidth(ref.current ? ref.current.getBoundingClientRect().width : 0);
  });
  return (
    <div ref={ref} className="swiperEaseContainer">
      <SwiperEaseCanvas gap={gap} width={width}>
        {children}
      </SwiperEaseCanvas>
    </div>
  );
};

export default SwiperEaseContainer;
