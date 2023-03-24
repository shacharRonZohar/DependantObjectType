import type { CheckValue, AnyIndex, RemoveFromStart } from '../src/util'

// DOSEN'T WORK
// type DependantObj<T, KM extends AnyIndex> = {
//   [Key in keyof T as RemoveFromStart<Key, 'is'>]-?: CheckKey<
//     T[Key],
//     KM[RemoveFromStart<Key, 'is'>],
//     boolean,
//     true
//   >

export type DependantObj<T, KM extends AnyIndex> = {
  // [Key in keyof T as RemoveFromStart<Key, 'is'> ]-?: T[Key] extends true
  //   ? KM[RemoveFromStart<Key, 'is'>]
  //   : never

  [Key in keyof T as CheckValue<
    T[Key],
    true,
    RemoveFromStart<Key, 'is'>,
    never
  >]-?: CheckValue<T[Key], true, KM[RemoveFromStart<Key, 'is'>], never>
}

// interface TestKeyMap extends AnyIndex {
//   state: 'pinia' | 'vuex'
//   syntax: 'options' | 'composition'
// }

// const obj1 = {
//   isState: true,
//   isSyntax: false,
// } as const

// const obj = {
//   state: 'pinia',
//   // syntax: 'options',
// } satisfies DependantObj<typeof obj1, TestKeyMap>
