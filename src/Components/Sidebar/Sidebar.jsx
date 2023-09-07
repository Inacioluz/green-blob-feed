import { Avatar } from '../Avatar/Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
       <img className={styles.cover}
        src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
        />
    
      <div className={styles.perfil}>
      <Avatar src="https://scontent.fvcp10-1.fna.fbcdn.net/v/t1.6435-9/118580989_116494490173865_5625343286437638877_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=eroT--q2W80AX-z5ClC&_nc_ht=scontent.fvcp10-1.fna&oh=00_AfCd21HBlZFAvDwKHy1jDLSBiBoma_kd6_xdrL_nh53zZA&oe=6521D104" />
      

        <strong>Inacio Silva</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
