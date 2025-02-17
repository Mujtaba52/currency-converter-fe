import { AxiosError } from "axios";

export const handleApiError = (error: unknown) => {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return {
      statusCode: 500,
      message: 'Unexpected error occurred',
      data: {},
    };
};