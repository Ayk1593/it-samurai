import React from "react";
import styles from './users.module.css'

let Users = (props) => {
  if (props.users.length === 0) {
      props.setUsers([
              {
                  id: 1,
                  photoUrl: 'https://viaestvita.kiev.ua/uploads/posts/2016-09/grajd/01.jpg',
                  followed: false,
                  fullName: 'Dmitry',
                  status: 'I am a boss',
                  location: {city: 'Minsk', country: 'Belarus'}
              },
              {
                  id: 2,
                  photoUrl: 'https://viaestvita.kiev.ua/uploads/posts/2016-09/grajd/01.jpg',
                  followed: true,
                  fullName: 'Sasha',
                  status: 'I am a boss too',
                  location: {city: 'Moscow', country: 'Russia'}
              },
              {
                  id: 3,
                  photoUrl: 'https://viaestvita.kiev.ua/uploads/posts/2016-09/grajd/01.jpg',
                  followed: false,
                  fullName: 'Andrew',
                  status: 'I am a boss too',
                  location: {city: 'Kiev', country: 'Ukraine'}
              },
          ]
      )
  }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={styles.all}>
     <div className={styles.left}>
    <div>
      <img src={u.photoUrl} className={styles.usersPhoto} />
    </div>
                <div>
                    {u.followed
                        ? <button onClick={ () => {props.unfollow(u.id) }} > Unfollow</button>
                        : <button onClick={ () => {props.follow(u.id) }}> Follow</button>}

    </div>
    </div>
                    <div className={styles.box}>
  <div className={styles.ava}>
                       <div>{u.fullName}</div>
                         <div>{u.status}</div>
</div>
                    <div className={styles.location}>
                    <div>{u.location.country}</div>
                         <div>{u.location.city}</div>
      </div>
                        </div>
                </div>

            </div>)
        }
    </div>
}

export default Users;