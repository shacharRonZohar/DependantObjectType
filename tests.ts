import type { RemoveFromStart, CheckValue, HasPrefix, Assert } from './util'

type HasPrefixPositive = Assert<HasPrefix<'isState', 'is'>, true>
const hasPrefixPositive: HasPrefixPositive = true
type HasPrefixNegetive = Assert<HasPrefix<'sState', 'is'>, false>
const hasPrefixNegetive: HasPrefixNegetive = true

type RemoveFromStartTest1 = Assert<RemoveFromStart<'isState', 'is'>, 'state'>
const removeFromStartTest1: RemoveFromStartTest1 = true

type RemoveFromStartTest2 = Assert<RemoveFromStart<'sState', 'is'>, 'sState'>
const removeFromStartTest2: RemoveFromStartTest2 = true

type CheckValueTest1 = Assert<CheckValue<'pinia', 'pinia', 'test'>, 'test'>
const checkValueTest1: CheckValueTest1 = true

type CheckValueTest2 = Assert<CheckValue<'pinia', 'vuex', 'test'>, null>
const checkValueTest2: CheckValueTest2 = true

type CheckValueTest3 = Assert<CheckValue<'pinia', 'vuex', 'test', 'no'>, 'no'>
const checkValueTest3: CheckValueTest3 = true

type CheckValueTest4 = Assert<CheckValue<'pinia', 'vuex', 'test', never>, never>
const checkValueTest4: CheckValueTest3 = true
