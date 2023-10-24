import { useState, useEffect } from 'react';

const useWhiteBackground = () => {
    const [isWhiteBackground, setIsWhiteBackground] = useState(false);

    useEffect(() => {
        const checkBackground = () => {
            const whiteSections = document.getElementsByClassName('white-background');
            let isVisible = false;
            for (let i = 0; i < whiteSections.length; i++) {
                const rect = whiteSections[i].getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    isVisible = true;
                    break;
                }
            }
            setIsWhiteBackground(isVisible);
        };


        window.addEventListener('scroll', checkBackground);

        return () => {
            window.removeEventListener('scroll', checkBackground);
        };
    }, []);

    return isWhiteBackground;
};

export default useWhiteBackground;
