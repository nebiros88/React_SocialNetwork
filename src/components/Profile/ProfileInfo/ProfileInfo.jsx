import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.profileInfo_wrapper}>
      <div className={s.profileImg}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGh5nnU_7Ug4dKSN3ufS3W66ZaOMsl6mk0rg&usqp=CAU' alt='profilePicture'></img>
      </div>
      <div className={s.descriptionBlock}>
        <img className={s.userAvatar} src={props.profile.photos.large} />
        <div className={s.userInfo}>
          <div className={s.userName}> user name</div>
          <div className={s.userStatus}>
            <ProfileStatus status='hello'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;