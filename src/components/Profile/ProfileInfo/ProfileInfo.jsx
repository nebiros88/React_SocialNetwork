import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div >
      <div className={s.profileImg}> 
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGh5nnU_7Ug4dKSN3ufS3W66ZaOMsl6mk0rg&usqp=CAU' alt='profilePicture'></img>
      </div>
      <div className={s.descriptionBlock}>  
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;