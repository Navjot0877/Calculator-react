import { ACTIONS } from "./ACTIONS"

export default function OperationButton({ dispatch, operation }){
    return <button
     onClick={() => dispatch ({ type: ACTIONS.CHOOSE, payload: { operation }})}>
        {operation}
     </button>
}