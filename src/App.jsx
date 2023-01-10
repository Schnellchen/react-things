import React from 'react';
import { Portal } from './Modules/Portal';
import { LazyLoading } from './Modules/LazyLoading';
import { Reconcilation } from './Modules/Reconcilation';
import { Memo } from './Modules/Memo';
import { ImperativeHandle } from './Modules/ImperativeHandle';
import { ClassRef } from './Modules/Ref';
import { LifeCycle } from './Modules/LifeCycle';
import './App.css';

function App() {
  return (
    <div>
      <LifeCycle />
      <Memo />
      <ClassRef />
      <ImperativeHandle />
      <Reconcilation />
      <Portal />
      <LazyLoading />
    </div>
  );
}

export default App;
