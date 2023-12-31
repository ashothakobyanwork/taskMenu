import axios from 'axios';
import {entries, isPlainObject, keys} from './object';

export declare const GLOBAL_ERROR_NAME = 'globalError';

export type ResponseErrors = Record<string, string>;

export function handleRequestError(
  error: unknown,
  options: {handleRawErrors?: (errors: Record<string, any>) => void} = {},
): ResponseErrors {
  const {handleRawErrors} = options;

  const errors: ResponseErrors = {};

  if (!axios.isAxiosError(error)) {
    errors[GLOBAL_ERROR_NAME] = 'Something went wrong';
    return errors;
  }

  if (error.response) {
    switch (error.response.status) {
      case 400:
      case 403: {
        const {data} = error.response;
        if (!('detail' in data)) {
          errors[GLOBAL_ERROR_NAME] = 'Server error';
          break;
        }
        if (handleRawErrors) {
          handleRawErrors(data.detail);
        }
        entries(data.detail).forEach(([field, message]) => {
          if (isPlainObject(message)) {
            keys(message).forEach(subfield => {
              errors[`${field as string}.${subfield as string}`] =
                getErrorMessage(message[subfield]);
            });
          } else if (Array.isArray(message)) {
            errors[field as string] = message[0];
          } else {
            errors[field as string] = message;
          }
        });
        break;
      }
      case 401: {
        break;
      }
      default:
        // 500, 502
        errors[GLOBAL_ERROR_NAME] = 'Server error';
        break;
    }
  } else if (error.request) {
    if (error.request.status === 0) {
      errors[GLOBAL_ERROR_NAME] = 'Network error';
    }
  } else {
    errors[GLOBAL_ERROR_NAME] = 'Something went wrong';
  }

  if ('object_error' in errors) {
    errors[GLOBAL_ERROR_NAME] = errors.object_error;
    delete errors.object_error;
  }

  return errors;
}

function getErrorMessage(error: unknown) {
  return Array.isArray(error) ? error[0] : error;
}
