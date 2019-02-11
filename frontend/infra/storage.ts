export enum StorageKey {
  AUTH_TOKEN = 'AUTH_TOKEN',
}

interface StorageDriver {
  getItem: (key: string) => any
  setItem: (key: string, value: string) => any
  removeItem: (key: string) => any
}

type Key = keyof typeof StorageKey

export class Storage {
  driver: StorageDriver

  constructor(driver: StorageDriver = localStorage) {
    this.driver = driver
  }

  setDriver(driver: StorageDriver) {
    this.driver = driver
  }

  set(key: Key, object: any) {
    return this.driver.setItem(key, JSON.stringify(object))
  }

  get(key: Key) {
    return JSON.parse(this.driver.getItem(key) || 'null')
  }

  remove(key: Key) {
    return this.driver.removeItem(key)
  }
}

export const storage = new Storage()
