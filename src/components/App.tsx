import styles from '../assets/styles/App.module.css'
import Editor from "./Editor.tsx";
import Manager from "./Manager.tsx";
import Menu from "./Menu.tsx";

export default function App() {
  return (
    <div className={styles.app}>
        <Menu />
        <div className={styles.content}>
            <Manager />
            <Editor />
        </div>
    </div>
  )
}