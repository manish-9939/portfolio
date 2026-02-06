import React from 'react';

const ParticleNetwork = () => {
    return (
        <>
            <div
                className="theme-bg"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    pointerEvents: 'none',
                    transition: 'background 0.5s ease'
                }}
            />
            <style>
                {`
                [data-theme='dark'] .theme-bg {
                    background: radial-gradient(circle at 50% 50%, #17171e 0%, #09090b 100%);
                }
                [data-theme='light'] .theme-bg {
                    background: radial-gradient(circle at 50% 50%, #ffffff 0%, #f1f5f9 100%);
                }
                `}
            </style>
        </>
    );
};

export default ParticleNetwork;
