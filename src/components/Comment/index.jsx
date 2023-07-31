import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment(props){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/lucasfreittas.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Freitas</strong>
                            <time title="27 de Julho às 19:27" dateTime="2023-07-27  19:27">Publicado há 1h</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}