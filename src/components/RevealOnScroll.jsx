import React, { useEffect, useRef, useState } from 'react';

const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const style = {
        animationDelay: `${delay}ms`,
        opacity: 0 // Start invisible
    };

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={isVisible ? { animationDelay: `${delay}ms` } : { opacity: 0 }}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;
