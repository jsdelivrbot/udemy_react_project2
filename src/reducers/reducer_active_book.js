//all reducers always have 2 parameters
//state argument is not application state, only the state
//this reducer is responsible for
//if it's undefined (state) set it to null es6
export default function(state = null, action){
	switch(action.type){
		case 'BOOK_SELECTED':
			return action.payload;
	}
	return state;
}