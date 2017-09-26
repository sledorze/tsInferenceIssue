import * as t from 'io-ts'

type ZA = { tag: 'a', pa: ALL }
type ZB = { tag: 'b', pb: ALL }
type ZC = { tag: 'c', pc: ALL }
type ZD = { tag: 'd', pc: ALL }
type ZE = { tag: 'e', pc: ALL }
type ALL = ZA | ZB | ZC | ZD | ZE
