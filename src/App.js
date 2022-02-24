import './App.css';
import EffectTutorial from './hooks/useEffect/Effect_useEffect';
import LayoutEffectTutorial from './hooks/useLayoutEffect/LayoutEffect_useLayoutEffect';
import ReducerTutorial from './hooks/useReducer/Reducer_useReducer';
import RefTutorial from './hooks/useRef/Ref_useRef';

import StateHook from './hooks/useState/State_useState';

function App() {
  return (
    <div className="App">
      <LayoutEffectTutorial />
      <RefTutorial />
      <StateHook />
      <ReducerTutorial />
      <EffectTutorial />
    </div>
  );
}

export default App;
