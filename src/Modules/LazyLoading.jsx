import React, { useState, Suspense } from 'react';
const LazyFibonacci = React.lazy(() => import('./Fibonacci'))

const LazyLoading = () => {
    const [isLazyOpen, setLazyOpen] = useState(false);
  
    return <>
      <h3>Lazy Loading</h3>
      <button onClick={() => setLazyOpen(!isLazyOpen)}>Toggle Lazy</button>
      {isLazyOpen && <Suspense fallback={<div>Загрузка</div>}><LazyFibonacci /></Suspense>}
    </>
  }

 export { LazyLoading } 