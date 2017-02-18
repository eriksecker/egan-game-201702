import HeroModel from '../classes/Hero';

const UPDATE 		= 'hero/UPDATE';

const INIT_STATE = {
	model: new HeroModel({}),
	data: { ...new HeroModel({}) },
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
