import { AxiosError } from "axios";

export const handleApiError = (error: unknown) => {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
    throw new AxiosError(
      "Unexpected error occurred",
      "500"
    );
    
};