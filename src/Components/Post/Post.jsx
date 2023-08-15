import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar/Avatar.jsx'
import { Comment } from '../Comment/Comment.jsx'
import styles from './Post.module.css'
import { useState } from 'react';

export function Post({ author, publishedAt, content }){

    const [comments, setComments] = useState([
     'Opa, seu comentário é muito legal meu brother!!!!!'
    ])

    const [ newCommentText, setNewCommentText ] = useState('')

    console.log(newCommentText)

    const publishedDateFormatted =  format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handCreateNewComment() {
      event.preventDefault()

      setComments ([...comments, newCommentText]);
      setNewCommentText('');
       
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    function newCommentInvalid() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentsToDelete) {
        
        const commentsWithoutDeletedOne = comments.filter(comments => {
            return comments != commentsToDelete;
        })
        
        setComments(commentsWithoutDeletedOne);

    }
    const isNewCommentEmpty = newCommentText.length === 0;

    return (
       
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
            {content.map(line => {
                if (line.type === 'paragraph') {
                return <p key={line.content}>{line.content}</p>;
                } else if ( line.type === 'link') {
                    return <p key={line.content}><a href="#">{line.content}</a></p>;
                }
            })}
            </div>
            <form onSubmit={handCreateNewComment} className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                name="comments"
                placeholder="Deixe um comentário"
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={newCommentInvalid}
                required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                        </button>
                </footer>
            </form>
            
                <div className={styles.commentList}>
                {comments.map(comments => {
                    return ( 
                    <Comment 
                    key={comments} 
                    content={comments} 
                    onDeleteComment={deleteComment} 
                    />
                    )
                })}
                </div>

        </article>
    )
}