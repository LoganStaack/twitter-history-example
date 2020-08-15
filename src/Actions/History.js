export const PUSH_HISTORY = 'action/push_history';
export const CLOSE_MODAL = 'action/close_modal';
export const BACK_HISTORY = 'action/back_history';
export const FORWARD_HISTORY = 'action/forward_history';

export function pushHistory(key, isModal) {
	const result = {
		type: PUSH_HISTORY,
		key,
		isModal,
	};
	console.log(result);
	return result;
}

export function closeModal() {
	return {
		type: CLOSE_MODAL,
	};
}

export function backHistory() {
	return {
		type: BACK_HISTORY,
	};
}

export function forwardHistory() {
	return {
		type: FORWARD_HISTORY,
	};
}
