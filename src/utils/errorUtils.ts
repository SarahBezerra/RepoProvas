export interface AppError { 
    type:  'not_found' | 'bad_request' | 'unauthorized' | 'conflict',
	message: string
}

export function badRequest(message: string): AppError {
	throw { type: 'bad_request', message };
}
export function Unauthorized(message: string): AppError {
	throw { type: 'unauthorized', message };
}
export function notFound(message: string): AppError {
	throw { type: 'not_found', message };
}
export function Conflict(message: string): AppError {
	throw { type: 'conflict', message };
}