function isObject(arg: any) {
  return Object.prototype.toString.call(arg) === '[object Object]';
}

export const isPlainObject = (arg: any): boolean => {
  if (!isObject(arg)) {
    return false;
  }
  if (arg.constructor === undefined) {
    return true;
  }
  if (!isObject(arg.constructor.prototype)) {
    return false;
  }
  if (
    !Object.prototype.hasOwnProperty.call(
      arg.constructor.prototype,
      'isPrototypeOf',
    )
  ) {
    return false;
  }
  return true;
};

// export const keys = <T extends object>(
//   o: T,
//   includePrototypeKeys = false,
// ): (keyof T)[] => {
//   if (includePrototypeKeys) {
//     return Object.keys(o) as (keyof T)[];
//   } else {
//     return Object.getOwnPropertyNames(o) as (keyof T)[];
//   }
// };
export const keys = <T extends object>(o: T): Array<keyof T> =>
  Object.keys(o) as Array<keyof T>;

// export const entries = <T extends object, K extends keyof T>(
//   o: T,
//   keyFilter?: (key: keyof T) => key is K,
// ): [K, T[K]][] => {
//   const objectEntries = Object.entries(o) as [keyof T, T[keyof T]][];

//   if (keyFilter) {
//     return objectEntries.filter(([key]) => keyFilter(key)) as [K, T[K]][];
//   }

//   return objectEntries as [K, T[K]][];
// };
export const entries = <T extends object>(o: T): [keyof T, T[keyof T]][] =>
  Object.entries(o) as [keyof T, T[keyof T]][];
