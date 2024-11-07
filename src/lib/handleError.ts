import { toast } from 'sonner';
import { ResponseType } from './constants';
import { Response } from './types';

export function handleError(error: Response) {
  if (error.type === ResponseType.ERROR) {
    toast.error(error.message);
  } else if (error.type === ResponseType.INFO) {
    toast.info(error.message);
  } else {
    toast.success(error.message);
  }
}
