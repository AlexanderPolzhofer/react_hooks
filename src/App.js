import './App.css';
import EffectTutorial from './hooks/useEffect/Effect_useEffect';
import ReducerTutorial from './hooks/useReducer/Reducer_useReducer';

import StateHook from './hooks/useState/State_useState';

function App() {
  return (
    <div className="App">
      <StateHook />
      <ReducerTutorial />
      <EffectTutorial />
    </div>
  );
}

export default App;
