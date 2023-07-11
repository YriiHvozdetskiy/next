import {ResponseError} from '@/utils/ResponseError';

export const errorCall = (error) => {
   if (!error) throw new ResponseError('Session is required')
}