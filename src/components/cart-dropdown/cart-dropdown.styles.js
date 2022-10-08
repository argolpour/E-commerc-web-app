
import styled from 'styled-components'
import { BaseButton, GoogleSingInButton, InvertedButton } from '../button/button.styles'

export const CartDropDownContainer = styled.div`
position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 40;
  ${BaseButton},${GoogleSingInButton},${InvertedButton} {
    margin-top: auto;
  }
`

export const Cartitems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
`

export const EmptyMessageContainer = styled.div`
   width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `


