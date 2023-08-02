import { useState } from 'react'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment({content, onDeleteComment}){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
         onDeleteComment(content)
    };

    function handleLikeCount(){
        setLikeCount(likeCount + 1)
    }

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

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}