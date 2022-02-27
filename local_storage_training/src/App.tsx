import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./state/store";
import {incValueAC, incValuesTC, setValueFromLsTC} from "./state/counter-recuder";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setValueFromLsTC())
    }, [value])

    const incHandler = () => {
        dispatch(incValuesTC())
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
