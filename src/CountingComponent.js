import { useState, useEffect, useRef } from "react";

const CountingComponent = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const stepTime = Math.abs(Math.floor(duration / Math.abs(end - start)));
      const timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount === end) {
            clearInterval(timer);
            return prevCount;
          }
          return prevCount + (end > start ? 1 : -1);
        });
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, start, end, duration]);

  return (
    <div ref={ref} className="text-3xl font-bold">
      {count}
    </div>
  );
};

export default CountingComponent;
