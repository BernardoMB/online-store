import React, { useEffect, useState, useRef } from 'react';
import './BeforeAfterSlider.css';
import { Box } from '@chakra-ui/react';

const BeforeAfterSlider: React.FC<{ 
    beforeSrc: string, 
    afterSrc: string, 
    duration?: number 
}> = ({ beforeSrc, afterSrc, duration = 5000 }) => {
    const [sliderValue, setSliderValue] = useState(50);
    const direction = useRef(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setSliderValue(prev => {
                if (prev >= 100) direction.current = -1;
                if (prev <= 0) direction.current = 1;
                return prev + direction.current * 1;
            });
        }, duration / 200);

        return () => clearInterval(interval);
    }, [duration]);

    return (
        <Box className="slider-container" borderRadius={'inherit'}>
            <img src={afterSrc} alt="After" className="image" />
            <div
                className="after-wrapper"
                style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
            >
                <img src={beforeSrc} alt="Before" className="image" />
            </div>
            <div className="slider-line" style={{ left: `${sliderValue}%` }} />
        </Box>
    );
};

export default BeforeAfterSlider;
