import { useState } from "react"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice"
import styled, { css } from "styled-components"

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const styledButton = css`
  appearance: none;
  background: none;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: rgb(112, 76, 182);
  padding-bottom: 4px;
  cursor: pointer;
  background-color: rgba(112, 76, 182, 0.1);
  border-radius: 2px;
  transition: all 0.15s;
  margin-left: 4px;
  margin-right: 8px;
  &:hover,
  &:focus {
    border: 2px solid rgba(112, 76, 182, 0.4);
  }
  &:active {
    background-color: rgba(112, 76, 182, 0.2);
  }
`

const styledAsyncButton = css`
  position: relative;
  &:after {
    content: "";
    background-color: rgba(112, 76, 182, 0.15);
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    transition: width 1s linear, opacity 0.5s ease 1s;
  }

  &:active:after {
    width: 0%;
    opacity: 1;
    transition: 0s;
  }
`

const Textbox = styled.input`
  font-size: 32px;
  padding: 2px;
  width: 64px;
  text-align: center;
  margin-right: 4px;
`

const Value = styled.div`
  font-size: 78px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2px;
  font-family: "Courier New", Courier, monospace;
`

const AsyncButton = styled.button`
  ${styledButton}
  ${styledAsyncButton}
`
const Button = styled.button`
  ${styledButton}
`

export function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <Row>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <Value>{count}</Value>
        <Button onClick={() => dispatch(increment())}>+</Button>
      </Row>
      <Row>
        <Textbox
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount !
        </Button>
        <AsyncButton onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </AsyncButton>
        <Button onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </Button>
      </Row>
    </div>
  )
}
