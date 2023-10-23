import { ReactElement } from 'react';
import styles from './Button.module.css';
import { IButtonProps } from '../../models/models';

export const Button = ({ buttonText, handleClick, fontSize = 18, type = 'button', isButtonEnable = false }: IButtonProps): ReactElement => {
  return (
    <button
      className={`${styles.button} ${isButtonEnable ? styles.buttonDisabled : ''}`}
      style={{ fontSize: `${fontSize}px` }}
      onClick={handleClick}
      type={type}
      disabled={isButtonEnable}
    >
      {buttonText}
    </button>
  )
};