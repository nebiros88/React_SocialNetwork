import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Redirect } from 'react-router';

const Profile = (props) => {
  if(!props.isAuth) return <Redirect to='/login' />
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;