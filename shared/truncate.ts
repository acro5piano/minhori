export const truncate = (sub: string, length: number = 40) =>
  sub.length > length ? sub.slice(0, length) + '...' : sub
