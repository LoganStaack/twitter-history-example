import {
	PUSH_HISTORY,
	CLOSE_MODAL,
	BACK_HISTORY,
	FORWARD_HISTORY,
} from '../Actions/History';

const History = (state = [], action) => {
	switch (action.type) {
		case PUSH_HISTORY:
			if (state.length < 1 || state[state.length - 1].isCurrent) {
				return [
					...state.map((item) => {
						return { ...item, isCurrent: false };
					}),
					{ key: action.key, isModal: action.isModal, isCurrent: true },
				];
			} else {
				const currentLocationIndexPush = state.findIndex(
					(item) => item.isCurrent
				);
				return [
					...state.slice(0, currentLocationIndexPush + 1).map((item) => {
						return { ...item, isCurrent: false };
					}),
					{ key: action.key, isModal: action.isModal, isCurrent: true },
				];
			}
		case CLOSE_MODAL:
			const currentLocationIndexClose = state.findIndex(
				(item) => item.isCurrent
			);
			if (state.length === 0 || !state[currentLocationIndexClose].isModal) {
				return state;
			}
			let stateCopy = state.slice();
			if (currentLocationIndexClose !== stateCopy.length - 1) {
				stateCopy = stateCopy.slice(0, currentLocationIndexClose + 1);
			}
			const lastNonModal =
				stateCopy.length -
				1 -
				stateCopy.reverse().findIndex((item) => !item.isModal);
			const newHistory = state.slice(0, lastNonModal + 1);
			const newLocation = newHistory.pop();
			return [...newHistory, { ...newLocation, isCurrent: true }];
		case BACK_HISTORY:
			const currentLocationIndexBack = state.findIndex(
				(item) => item.isCurrent
			);
			if (currentLocationIndexBack) {
				const stateCopy = state.slice();
				stateCopy[currentLocationIndexBack].isCurrent = false;
				stateCopy[currentLocationIndexBack - 1].isCurrent = true;
				return stateCopy;
			} else {
				return state;
			}
		case FORWARD_HISTORY:
			const currentLocationIndexForward = state.findIndex(
				(item) => item.isCurrent
			);
			if (currentLocationIndexForward !== state.length - 1) {
				const stateCopy = state.slice();
				stateCopy[currentLocationIndexForward].isCurrent = false;
				stateCopy[currentLocationIndexForward + 1].isCurrent = true;
				return stateCopy;
			} else {
				return state;
			}
		default:
			return state;
	}
};

export default History;
