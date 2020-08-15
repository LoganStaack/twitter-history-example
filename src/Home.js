import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	backHistory,
	pushHistory,
	forwardHistory,
	closeModal,
} from './Actions/History';

function randomString() {
	return (
		Math.random().toString(36).substring(2, 5) +
		Math.random().toString(36).substring(2, 5)
	);
}

const Home = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	console.log(state);

	const { history } = state;

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<div
				id="buttons"
				style={{
					display: 'flex',
					flexDirection: 'row',
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
			>
				<button onClick={() => dispatch(backHistory())}>Back</button>
				<button onClick={() => dispatch(forwardHistory())}>Forward</button>
				<button onClick={() => dispatch(pushHistory(randomString(), false))}>
					Push Non-Modal
				</button>
				<button onClick={() => dispatch(pushHistory(randomString(), true))}>
					Push Modal
				</button>
				<button onClick={() => dispatch(closeModal())}>Close Modal</button>
			</div>
			<div
				id="history"
				style={{
					display: 'flex',
					flexDirection: 'column',
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
			>
				{history.map((historyItem) => (
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							paddingBottom: '5px',
							paddingTop: '5px',
						}}
					>
						<div style={{ width: '100px' }}>{historyItem.key}</div>
						<div style={{ width: '100px' }}>
							{historyItem.isModal ? 'Modal' : 'Non-Modal'}
						</div>
						<div style={{ width: '100px' }}>
							{historyItem.isCurrent && '👈'}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
