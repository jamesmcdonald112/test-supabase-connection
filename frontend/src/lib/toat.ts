import { toast } from "sonner";

export const notify = {
  success: (message: string) =>
    toast.success(message, { duration: 2500 }),

  error: (message: string) =>
    toast.error(message, { duration: 3000 }),

  info: (message: string) =>
    toast(message, { duration: 2500 }),

  promise: <T>(
    promise: Promise<T>,
    messages: { loading: string; success: string; error: string }
  ) =>
    toast.promise(promise, {
      loading: messages.loading,
      success: messages.success,
      error: messages.error,
    }),
};