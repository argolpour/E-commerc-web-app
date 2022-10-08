import { BaseButton, GoogleSingInButton, InvertedButton } from './button.styles.js'
export const BUTTON_TYPE_CLASS = {
  base: 'base-button',
  google: 'google-sign-in',
  inverted: 'inverted'
}
const getButton = (buttonType = BUTTON_TYPE_CLASS.base) => (

  {
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.google]: GoogleSingInButton,
    [BUTTON_TYPE_CLASS.inverted]: InvertedButton
  }[buttonType]
)


const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType)
  return (
    <CustomButton className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`} {...otherProps}>
      {children}
    </CustomButton>
  )
}

export default Button