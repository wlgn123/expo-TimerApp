// Import

// Actions

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECONDS = 'ADD_SECONDS';


// Action Creators
function startTimer() {
	return {
		type: START_TIMER
	}
}

function restartTimer() {
	return {
		type: RESTART_TIMER
	}
}

function addSecond() {
	return {
		type: ADD_SECONDS
	}
}

// Reducer

const TIMER_DURATION = 1500;

const initialState = {
	isPlaying: false,
	elapsedTime: 0,
	timerDuration: TIMER_DURATION
}

function reducer(state = initialState, action){
	switch(action.type) {
		case START_TIMER:
			return applyStartTimer(state);
		case RESTART_TIMER:
			return applyRestartTimer(state);
		case ADD_SECONDS:
			return applyAddSecond(state);
		default:
			return state;
	}
}

// Reducer Functions

function applyStartTimer(state) {
	return {
		...state,
		isPlaying: true
	}
}

function applyRestartTimer(state) {
	return {
		...state,
		isPlaying: false,
		elapsedTime: 0
	}
}

function applyAddSecond(state) {
	if(state.elapsedTime < TIMER_DURATION) {
		return {
			...state,
			elapsedTime: state.elapsedTime + 1
		}
	} else {
		return {
			...state,
			isPlaying: false
		}
	}
}

// Export Action Creator

const actionCreator = {
	startTimer,
	restartTimer,
	addSecond
}

export { actionCreator };

// Export Reducer

export default reducer;