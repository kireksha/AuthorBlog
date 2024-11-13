import { ACTION_TYPES } from './action-types';
import { server } from '../bff';

export const logout = (sessionKey) => {
	server.logout(sessionKey);

	return {
		type: ACTION_TYPES.LOGOUT,
	};
};
