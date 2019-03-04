import { DateTime } from 'luxon'

export function translate(a: string) {
  return a
    .replace(/(?:in )?(\d+) second ago/, '$1秒前')
    .replace(/(?:in )?(\d+) seconds ago/, '$1秒前')
    .replace(/(?:in )?(\d+) minute ago/, '$1分前')
    .replace(/(?:in )?(\d+) minutes ago/, '$1分前')
    .replace(/(?:in )?(\d+) hour ago/, '$1時間前')
    .replace(/(?:in )?(\d+) hours ago/, '$1時間前')
    .replace(/(?:in )?(\d+) day ago/, '$1日前')
    .replace(/(?:in )?(\d+) days ago/, '$1日前')
    .replace(/(?:in )?(\d+) month ago/, '$1月前')
    .replace(/(?:in )?(\d+) months ago/, '$1月前')
    .replace(/(?:in )?(\d+) year ago/, '$1年前')
    .replace(/(?:in )?(\d+) years ago/, '$1年前')
}

export function toRelative(isoString: string) {
  const date = DateTime.fromISO(String(isoString)).toRelative()
  if (!date) {
    return ''
  }
  return translate(date)
}
