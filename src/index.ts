import type { CheckValue, AnyIndex, RemoveFromStart } from '../src/util'

export type DependantObj<T, KM extends AnyIndex> = {
  [Key in keyof T as CheckValue<
    T[Key],
    true,
    RemoveFromStart<Key, 'is'>,
    never
  >]-?: CheckValue<T[Key], true, KM[RemoveFromStart<Key, 'is'>], never>
}
