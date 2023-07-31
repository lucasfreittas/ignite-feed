import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
      id: 1,
      author: {
          avatarUrl: 'https://github.com/lucasfreittas.png',
          name: 'Lucas Freitas',
          role: 'Web Developer'
      },
      content: [
          { type: 'paragraph', content: 'Fala galeraaa!'},
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu Portfia. É uma coisa bem legal'},
          { type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2022-05-03 20:00:00'),
  },

  {
      id: 2,
      author: {
          avatarUrl: 'https://github.com/maykbrito.png',
          name: 'Mayk Brito',
          role: 'Educator'
      },
      content: [
          { type: 'paragraph', content: 'Fala galeraaa!'},
          { type: 'paragraph', content: 'São Paulo Futebol Clube vai surpreender este ano!'},
          { type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2023-07-31 19:49:34'),
  },
]

function App() {


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
         {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
              )
         })}
        </main>
      </div>
    </div>
  )
}

export default App
