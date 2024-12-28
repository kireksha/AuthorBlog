import { request } from '../utils';
import { ACTION_TYPES } from './action-types';

export const logout = () => {
	request('/logout', 'POST');

	return {
		type: ACTION_TYPES.LOGOUT,
	};
};
