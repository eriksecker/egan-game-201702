import BackgroundModel from '../classes/Background';

const UPDATE 		= 'background/UPDATE';

const INIT_STATE = {
	model: new BackgroundModel({}),
	data: { ...new BackgroundModel({}) },
}

export default function ( state = INIT_STATE, action ) {
	switch( action.type ) {
		case UPDATE:
			return {
				...state,
				model: action.payload,
				data: { ...action.payload }
			};
		default:
			return state;
	}
}

export function updateModel( model ) {
	return {
		type: UPDATE,
		payload: model,
	}
}
