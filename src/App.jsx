import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';


function App() {


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
          <Post
            author="Lucas Freitas"
            content="Lorem ipsum dolor sit amet consectetur adiscipling elit. Assumenda odio aliquam volup obliqua máxima"
          />
          <Post
            author="Diego Fernandes"
            content="Texto Legal"
          />
        </main>
      </div>
    </div>
  )
}

export default App
