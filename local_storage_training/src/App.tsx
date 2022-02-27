import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./state/store";
import {incValueAC} from "./state/counter-recuder";

function App() {

  const value = useSelector<AppStateType, number>( state => state.counter.value)
  const dispatch = useDispatch()

  const incHandler = () => {
    dispatch(incValueAC())
    //setValue(value + 1)
  }

  /*const [value, setValue] = useState<number>(0)

  useEffect(() => {
    let valueAsString = localStorage.getItem("counterValue")
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString)
      setValue(newValue)
    }
  },[])
  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(value))
  },[value])*/




  return (
      <div className="App">
        <h1>
          {value}
        </h1>
        <button onClick={incHandler}>inc</button>
      </div>
  );
}

export default App;
