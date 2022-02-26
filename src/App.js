import './App.css';
import EffectTutorial from './hooks/useEffect/Effect_useEffect';
import LayoutEffectTutorial from './hooks/useLayoutEffect/LayoutEffect_useLayoutEffect';
import ReducerTutorial from './hooks/useReducer/Reducer_useReducer';
import RefTutorial from './hooks/useRef/Ref_useRef';
import ImperativeHandle from './hooks/useImperativeHandle/ImperativeHandle_useImperativeHandle';
import StateHook from './hooks/useState/State_useState';
import ContextTutorial from './hooks/useContext/Context_useContext';
import MemoTutorial from './hooks/useMemo/Memo_useMemo';

function App() {
  return (
    <div className="App">
      <MemoTutorial />
      <ContextTutorial />
      <ImperativeHandle />
      <LayoutEffectTutorial />
      <RefTutorial />
      <StateHook />
      <ReducerTutorial />
      <EffectTutorial />
    </div>
  );
}

export default App;
