'use client';

import { SlideInProps } from '@/lib/types';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export const SlideInEffect = ({
  duration = 1,
  delay = 0,
  direction,
  offset = 100,
  className,
  children,
}: SlideInProps) => {
  const container = useRef(null);

  useGSAP(
    () => {
      const vars: gsap.TweenVars = {
        opacity: 0,
        duration,
        delay,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 100%',
          toggleActions: 'play none none none',
        },
      };

      if (direction === 'top') vars.y = -offset;
      if (direction === 'bottom') vars.y = offset;
      if (direction === 'left') vars.x = -offset;
      if (direction === 'right') vars.x = offset;

      gsap.from(container.current, vars);
    },
    { scope: container },
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};

export const LineTextFlowEffect = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const split = SplitText.create(textRef.current, { type: 'lines' });

      gsap.fromTo(
        split.lines,
        {
          opacity: 0,
          yPercent: -100,
        },
        {
          opacity: 1,
          yPercent: 0,
          ease: 'power1.inOut',
          stagger: {
            amount: 0.5,
          },
          scrollTrigger: {
            trigger: split.lines,
            start: 'top 100%',
            toggleActions: 'play none none none',
          },
        },
      );
    },
    { scope: textRef },
  );

  return (
    <p className={className} ref={textRef}>
      {children}
    </p>
  );
};

export const SlideInGroup = ({
  children,
  direction,
  delay = 1,
  duration = 1,
  offset = 100,
  className,
}: SlideInProps) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const vars: gsap.TweenVars = {
        opacity: 0,
        delay,
        duration,
        ease: 'power1.inOut',
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: container.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      };

      if (direction === 'top') vars.y = -offset;
      if (direction === 'bottom') vars.y = offset;
      if (direction === 'left') vars.x = -offset;
      if (direction === 'right') vars.x = offset;

      if (container.current?.children) {
        gsap.from(container.current.children, vars);
      }
    },
    { scope: container },
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};

export const LetterTextFlow = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const split = SplitText.create(textRef.current, { type: 'chars' });

      gsap.from(split.chars, {
        opacity: 0,
        yPercent: -100,
        rotationX: 180,
        stagger: {
          amount: 1,
          from: 'random',
        },
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: textRef },
  );

  return (
    <p className={className} ref={textRef}>
      {children}
    </p>
  );
};

export const ImageFillIn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const imageContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        imageContainer.current,
        {
          opacity: 0,
          clipPath: 'inset(0% 0% 100% 0%)',
        },
        {
          opacity: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          scrollTrigger: {
            trigger: imageContainer.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        },
      );
    },
    { scope: imageContainer },
  );

  return (
    <div ref={imageContainer} className={className}>
      {children}
    </div>
  );
};

export const TextCounter = ({
  children,
  inner,
  className,
}: {
  children: React.ReactNode;
  inner: number | string;
  className?: string;
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        textRef.current,
        {
          innerText: 0,
        },
        {
          duration: 1,
          innerText: parseInt(inner.toString(), 10),
          snap: { innerText: 1 },
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        },
      );
    },
    { scope: textRef },
  );

  return (
    <span className={className} ref={textRef}>
      {children}
    </span>
  );
};
