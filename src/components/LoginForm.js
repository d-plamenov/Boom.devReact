import styles from "./LoginForm.module.css"

const LoginForm = () => {
  return (
    <form action="" className={styles.form}>
      <label htmlFor="username" className={styles.label}></label>
      <input type="text" className={styles.input} id="username" />
      <label htmlFor="password" className={styles.label}></label>
      <input type="password" className={styles.input} id="password" />
      <button className={styles.submit}>Login</button>
    </form>
  );
};

export default LoginForm ;