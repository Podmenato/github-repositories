import { toast } from 'react-hot-toast';

export const errorNotify = (message: string) => toast.error(message);
