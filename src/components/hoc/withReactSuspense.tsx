import React from 'react';

//WCP is props of Wrapped Component
export function withReactSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return (
            <React.Suspense fallback={<div>Loading...</div>}>
                <WrappedComponent {...props}/>
            </React.Suspense>
        )
    }
};
