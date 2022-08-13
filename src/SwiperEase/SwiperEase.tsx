import { createContext, ReactNode, useEffect, useState } from 'react';
import './SwiperEase.css';
import SwiperEaseContainer from './SwiperEaseContainer/SwiperEaseContainer';

interface ISwiperProps {
  children: ReactNode;
  pagination?: boolean;
  navigation?: boolean;
  autoPlay?: boolean;
  speedAutoPlay?: number;
  gap?: number;
}

export const ActiveSlideContext = createContext(0);

/**
 *
 * @param pagination boolean, default true
 * @param navigation boolean, default true
 * @param autoPlay boolean, default false
 */

const SwiperEase = ({
  children,
  pagination = true,
  navigation = true,
  autoPlay = false,
  speedAutoPlay = 3000,
  gap = 30,
}: ISwiperProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  function autoPlayFunc() {
    if (activeSlide + 1 < (children as []).length) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(0);
    }
  }

  useEffect(() => {
    if (autoPlay) {
      const intervalFunc = setInterval(autoPlayFunc, speedAutoPlay);
      return () => {
        clearInterval(intervalFunc);
      };
    }
  }, [activeSlide]);

  return (
    <div className="swiperEase">
      <ActiveSlideContext.Provider value={activeSlide}>
        {navigation ? (
          <div className="swiperEase__navigation">
            <div
              className="swiperEase__arrow swiperEase__arrow_left"
              onClick={() => {
                if (activeSlide - 1 >= 0) {
                  setActiveSlide(activeSlide - 1);
                } else {
                  setActiveSlide((children as []).length - 1);
                }
              }}></div>
            <SwiperEaseContainer gap={gap}>{children}</SwiperEaseContainer>
            <div
              className="swiperEase__arrow swiperEase__arrow_right"
              onClick={() => {
                if (activeSlide + 1 < (children as []).length) {
                  setActiveSlide(activeSlide + 1);
                } else {
                  setActiveSlide(0);
                }
              }}></div>
          </div>
        ) : (
          <SwiperEaseContainer gap={gap}>{children}</SwiperEaseContainer>
        )}
        {pagination && (
          <div className="swiperEase__pagination">
            {(children as []).map((elem, index) => (
              <div
                className={[
                  'swiperEase__bullet',
                  index === activeSlide ? 'swiperEase__bullet_active' : '',
                ].join(' ')}
                key={'bullets' + index}
                onClick={() => {
                  setActiveSlide(index);
                }}></div>
            ))}
          </div>
        )}
      </ActiveSlideContext.Provider>
    </div>
  );
};

export default SwiperEase;
