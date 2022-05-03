import {
  toast,
  ToastContent,
  ToastOptions,
  ToastPromiseParams,
} from 'react-toastify';

import { defaultToastOptions } from './AlertToast.consts';

type AlertToastProps = {
  content: ToastContent;
  options?: ToastOptions;
};

export function AlertToast({ content, options }: AlertToastProps) {
  return toast(content, {
    ...defaultToastOptions,
    ...options,
  });
}

export function PromiseAlertToast<T = unknown>(
  promise: Promise<T> | (() => Promise<T>),
  toastOptions: ToastPromiseParams,
  options?: ToastOptions,
) {
  return toast.promise(promise, toastOptions, {
    ...defaultToastOptions,
    ...options,
  });
}

export function SuccessAlertToast({ content, options }: AlertToastProps) {
  return AlertToast({ content, options: { ...options, type: 'success' } });
}

export function ErrorAlertToast({ content, options }: AlertToastProps) {
  return AlertToast({ content, options: { ...options, type: 'error' } });
}

export function InfoAlertToast({ content, options }: AlertToastProps) {
  return AlertToast({ content, options: { ...options, type: 'info' } });
}
