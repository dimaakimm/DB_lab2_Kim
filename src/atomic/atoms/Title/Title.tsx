import styles from "./Title.module.scss";

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "primary" | "secondary";
}
const Title: React.FC<TitleProps> = ({ children }) => {
  return <div className={styles.title}>{children}</div>;
};

export default Title;
