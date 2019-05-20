import { Action } from '@ngrx/store'

export function reducer<T, U>(
  cases: Partial<{ [k in keyof U]: (action: Action, state: T) => Partial<T> }>,
  enumMatchers: U,
  initialState: T,
): (state: T, action: Action) => T {
  return (state: T = initialState, action: Action) => {
    const actionType = action.type

    const matchers = Object.keys(enumMatchers).reduce((obj, key) => {
      obj[enumMatchers[key]] = key
      return obj
    }, {})

    const match = matchers[actionType]
    return cases.hasOwnProperty(matchers[actionType])
      ? Object.assign({}, state, cases[match](action, state))
      : state
  }
}
