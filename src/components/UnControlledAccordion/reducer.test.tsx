import {reducer, StateType} from "./reducer";

test('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})

    //expection
    expect(newState.collapsed).toBe(true)
})
test('collapsed should be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})

    //expection
    expect(newState.collapsed).toBe(false)
})
test('reducer should be Error', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action


    //expection
    expect ( () => {reducer(state, {type: "FAKETYPE"})}).toThrowError()
})