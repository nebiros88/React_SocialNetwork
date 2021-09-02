import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div >
      <div className={s.profileImg}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGh5nnU_7Ug4dKSN3ufS3W66ZaOMsl6mk0rg&usqp=CAU' alt='profilePicture'></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;