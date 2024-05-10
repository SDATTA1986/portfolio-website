import { useState, useEffect } from "react";

const LoadingTitle = () => {
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingProgress(prevProgress => {
                if (prevProgress < 100) {
                    return prevProgress + 10; // Increment progress by 10% every 300ms
                } else {
                    clearInterval(interval); // Stop the interval once progress reaches 100%
                    return prevProgress;
                }
            });
        }, 300);

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <div style={{
                width: '100%',
                height: '5px', // Adjust height as needed
                backgroundColor: '#f0f0f0', // Background color of the loading container
                borderRadius: '4px', // Optional: Add border radius for rounded corners
            }} >
                <div style={{
                    height: '100%',
                    backgroundColor: '#007bff', // Color of the loading bar
                    borderRadius: '4px', // Optional: Add border radius for rounded corners
                    width: `${loadingProgress}%`,
                    transition: 'width 0.3s ease', // Optional: Add transition effect for smooth animation
                }} ></div>
        </div>
        </div>
    );
};

export default LoadingTitle;


