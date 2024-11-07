import { toast } from 'sonner';
import { ResponseType } from './constants';
import { Response } from './types';

export function handleResponse(response: Response): boolean {
  if (response.type === ResponseType.ERROR) {
    toast.error(response.message);
  } else if (response.type === ResponseType.INFO) {
    toast.info(response.message);
  } else {
    toast.success(response.message);
    return true;
  }
  return false;
}
