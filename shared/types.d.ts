declare type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
declare type ValueOf<T> = T[keyof T]
