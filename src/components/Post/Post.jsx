import styles from './Post.module.css'
import { Comment } from '../Comment'

export function Post(props){
    return(
        <div>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <img className={styles.avatar} src="https://github.com/lucasfreittas.png"/>
                        <div className={styles.authorInfo}>
                            <strong>Lucas Freitas</strong>
                            <span>Web Developer</span>
                        </div>
                    </div>

                    <time title="27 de Julho às 19:27" dateTime="2023-07-27  19:27">Publicado há 1h</time>
                </header>

                <div className={styles.content}>
                    <p>Fala galeraaa</p>
                    <p>Acabei de subir mais um projeto do meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat</p>
                    <p><a href="">lucas.design/projetinho</a></p>
                    <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
               </div>

               <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea
                        placeholder='Deixe um comentário'
                    />

                    <footer>
                        <button type='submit'>Publicar</button>
                    </footer>
               </form>
               <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
               </div>
            </article>
        </div>
    )
}