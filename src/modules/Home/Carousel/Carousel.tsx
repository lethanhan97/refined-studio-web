import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

import { ArrowLeft } from '../../../shared/assets/icons/ArrowLeft';
import { ArrowRight } from '../../../shared/assets/icons/ArrowRight';
import { c } from '../../../shared/utils/classNameParser';
import styles from './Carousel.module.scss';

interface CarouselProps {
  classNames?: string[];
}

const Carousel: React.FC<CarouselProps> = ({ classNames = [] }) => {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    arrows: false,
    className: styles['carousel-slider'],
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    appendDots: (dots: React.ReactNode[]) => (
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '40px',
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '3rem',
        }}
      >
        <ul className={styles['carousel-dot-wrapper']}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className={styles['carousel-dot']}>
        <div
          className={c([
            styles['carousel-dot-content'],
            activeSlide === i ? styles['carousel-dot-content-selected'] : '',
          ])}
        ></div>
      </div>
    ),
  };

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const prev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <section className={c([styles['carousel'], ...classNames])}>
      <Slider {...settings} ref={sliderRef}>
        {[...Array(10)].map((_, i) => (
          <div key={i}>
            <div
              style={{
                height: '80vh',
                width: '100vw',
              }}
            >
              <h3>{i}</h3>
            </div>
          </div>
        ))}
      </Slider>

      <CarouselArrow
        type="left"
        onClick={prev}
        classNames={[styles['carousel-arrow'], styles['carousel-arrow-left']]}
      />
      <CarouselArrow
        type="right"
        onClick={next}
        classNames={[styles['carousel-arrow'], styles['carousel-arrow-right']]}
      />
    </section>
  );
};

interface CarouselArrowProps {
  type: 'left' | 'right';
  classNames?: string[];
  onClick: () => void;
}
const CarouselArrow: React.FC<CarouselArrowProps> = ({
  type,
  classNames = [],
  onClick,
}) => {
  return (
    <button className={c([...classNames])} onClick={onClick}>
      {type === 'left' ? <ArrowLeft /> : <ArrowRight />}
    </button>
  );
};

export default Carousel;
