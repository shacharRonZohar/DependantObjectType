#!/usr/bin/env ts-node-esm

type BooleanIndex = {
  [key: string]: boolean
}

interface AnyIndex {
  [key: string | number | symbol]: any
}

type RemoveFromStart<
  S extends string,
  P extends string
> = S extends `${P}${infer T}` ? Uncapitalize<T> : S

// type test = RemoveFromStart<'isState', 'is'>

// TODO: Figure out why Key is defined as string | number | symbol here, even though it works
type DependantObj<T extends BooleanIndex, KeyMap extends AnyIndex> = {
  [Key in keyof T as RemoveFromStart<Key, 'is'>]-?: T[Key] extends true
    ? KeyMap[RemoveFromStart<Key, 'is'>]
    : never
}

// interface TestKeyMap extends AnyIndex {
//   state: 'pinia' | 'vuex'
//   syntax: 'options' | 'composition'
// }

// const obj1 = {
//   isState: true,
//   isSyntax: true,
// } as const

// const obj = {
//   state: 'pinia',
//   syntax: 'options',
// } satisfies DependantObj<typeof obj1, TestKeyMap>
