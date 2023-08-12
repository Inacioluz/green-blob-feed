import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css'

import { ThumbsUp, Trash } from 'phosphor-react';


export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {
      onDeleteComment(content);
    }

    return (
    
        <div className={styles.comment}>      
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/108021488?v=4"  alt="" />

            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Inacio Silva</strong>
                            <time title='11 de maio ás 08:50h' dateTime="2023-05-11 08:50:30"> Há 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                        <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
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