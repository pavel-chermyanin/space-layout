import React, { ReactNode } from "react";
import styles from './style.module.scss'

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}
export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button className={styles.button} onClick={onClick}>{children}</button>;
};
