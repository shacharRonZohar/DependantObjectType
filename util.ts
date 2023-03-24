export type AnyKey = string | number | symbol

export interface AnyIndex {
  [key: AnyKey]: any
}

export type BooleanIndex = {
  [key: string]: boolean
}

// This type is used to check if a string starts with another string
export type HasPrefix<S, P extends string> = S extends `${P}${string}`
  ? true
  : false

export type RemoveFromStart<S, P extends string> = S extends string
  ? S extends `${P}${infer T}`
    ? Uncapitalize<T>
    : S
  : never

// TODO: Find better name
// This type is used to check if a value extends to another value, if it is, return the true return value, otherwise return the false return value, which is null by default
export type CheckValue<
  Value,
  CheckValue,
  TrueReturnValue,
  FalseReturnValue = null
> = Assert<Value, CheckValue> extends true ? TrueReturnValue : FalseReturnValue

// This type is used to check if two types are equal, see https://dev.to/ecyrbe/how-to-unit-test-your-typescript-utility-types-3cnm
export type Assert<T, U> = (<V>() => V extends T ? 1 : 2) extends <
  V
>() => V extends U ? 1 : 2
  ? true
  : false

// The same with an error message
export type AssertForTests<T, U> = (<V>() => V extends T ? 1 : 2) extends <
  V
>() => V extends U ? 1 : 2
  ? true
  : { error: 'Types are not equal'; type1: T; type2: U }
