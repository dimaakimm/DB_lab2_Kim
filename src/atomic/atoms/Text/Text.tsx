import styles from "./Text.module.scss";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "primary" | "secondary";
}

const Text: React.FC<TextProps> = ({ children }) => {
  return <div className={styles.text}>{children}</div>;
};

export default Text;
