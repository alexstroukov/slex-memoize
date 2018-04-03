import { memoize } from 'lodash'

export const combineOptionsKeys = ({ options, cache }) => {
  const optionKeys = Object.keys(options)
  if (optionKeys.length === 1) {
    return options[optionKeys[0]]
  } else {
    let key = ''
    for (const optionKey of optionKeys) {
      const arg = options[optionKey]
      let val = cache.get(arg)
      if (!val) {
        val = cache.set(arg)
      }
      key = key + '-' + val
    }
    return key
  }
}

export default combineOptionsKeys
