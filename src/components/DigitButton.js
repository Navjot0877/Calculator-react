import { ACTIONS } from "./ACTIONS"

export default function DigitButton({ dispatch, digit }){
    return <button
     onClick={() => dispatch ({ type: ACTIONS.ADD, payload: { digit }})}>
        {digit}
     </button>
}