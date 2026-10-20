import { toast } from '@/components/ui/toast';

interface iFieldError {
    origin: string;
    code: string;
    minimum?: number;
    maximum?: number;
    format?: string;
    pattern?: string;
    inclusive?: boolean;
    path: string[];
    message: string;
}

export const handleErrorResponse = async (error: any) => {
    switch (error.response.data.error.statusCode ?? error.response.status) {
        case 400:
            console.log(error.response.data.error);
            toast.add({
                type: 'error',
                description:
                    error.response.data.error?.message ??
                    error.response.statusText,
                priority: 'high',
            });
            break;
        case 401:
            console.log(error.response);
            toast.add({
                type: 'error',
                description:
                    error.response.data.error?.message ??
                    error.response.statusText,
                priority: 'high',
            });
            break;
        case 403:
            console.log(error.response);
            toast.add({
                type: 'error',
                description:
                    error.response.data.error?.message ??
                    error.response.statusText,
                priority: 'high',
            });
            break;
        case 404:
            console.log(error.response);
            toast.add({
                type: 'error',
                description:
                    error.response.data.error?.message ??
                    error.response.statusText,
                priority: 'high',
            });
            break;
        case 422: {
            const { errors } = error.response.data.error;
            if (errors.length > 0) {
                errors.forEach((e: iFieldError) => {
                    toast.add({
                        type: 'error',
                        description: e.message,
                        priority: 'high',
                    });
                });
            } else {
                toast.add({
                    type: 'error',
                    description:
                        error.response.data.error?.message ??
                        error.response.statusText,
                    priority: 'high',
                });
            }
            break;
        }
        case 500:
            console.log(error.response);
            toast.add({
                type: 'error',
                description:
                    error.response.data.error?.message ??
                    error.response.statusText,
                priority: 'high',
            });
            break;
        default:
            toast.add({
                type: 'error',
                description:
                    error.response.data.error?.message ??
                    error.response.statusText,
                priority: 'high',
            });
    }
};
