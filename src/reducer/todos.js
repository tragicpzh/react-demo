const todos=(state=[],action)=>{
    switch (action.type){
        case 'ADD_TODO':
            return[
                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed:false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo=>
                (action.id===todo.id)
                ?{...todo,completed:!todo.completed}
                :todo
            )
        case 'SET_VISIBILITY_FILTER':
            {
                if(action.filter==='Clear')return [];
                else return state;
            }
        default:
            return state
    }
}
export default todos;