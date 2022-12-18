import React, { ReactNode } from "react";
import styles from './style.module.scss'
import cl from 'classnames'

interface TitleProps {
  children: ReactNode;
  size?: "Medium" | "Large";
}
export const Title: React.FC<TitleProps> = ({ children, size = 'Medium' }) => {
  return <h2 className={cl(styles.title,styles[`title${size}`])}>{children}</h2>;
};
