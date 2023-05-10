import Login from '@/components/login/Login';
import NavBar from '@/components/navbar/NavBar';
import React from 'react'
import { useSession } from 'next-auth/react';

const settings = () => {
  const {data:session} = useSession();

  if(!session){
    return(
        <Login/>
    )
  }
  return (
    <>
      <NavBar/>
      <div className='settings'>
        <div className='profilSettingsBackground'>
          <div className='profilSettingLabel'>
            <p>My Profile</p>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <div className="userImg">
                <img src={session.user.image} alt="" />
              </div>
              <div className="userNP">
                <p>{session.user.name}</p>
                <p>Software Engineer</p>
              </div>
            </div>
            <div className="userEdit">
              <button className='userEditBtn'>Edit</button>
            </div>
          </div>
          <div className="personalInformation">
            <div className='PersonalInfoLabel'><p>personal Information</p></div>
            <div className='PersonelInfo'>
              <div className='Persinfo'>
                <div className='info'>
                  <p>First Name</p>
                  <p>Abdou</p>
                </div>
                <div className='info'>
                  <p>Last Name</p>
                  <p>Lahboub</p>
                </div>
              </div>
              <div className='Persinfo'>
                <div className='info'>
                  <p>Email address</p>
                  <p>{session.user.email}</p>
                </div>
                <div className='info'>
                  <p>Phone</p>
                  <p>+212xxxxxxxxxx</p>
                </div>
              </div>
              <div className='Persinfo'>
                <div className='info'>
                  <p>Bio</p>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="personalInformation">
            <div className='PersonalInfoLabel'><p>Address</p></div>
            <div className='PersonelInfo'>
              <div className='Persinfo'>
                <div className='info'>
                  <p>Country</p>
                  <p>Morroco</p>
                </div>
                <div className='info'>
                  <p>city</p>
                  <p>Rabat</p>
                </div>
              </div>
              <div className='Persinfo'>
                <div className='info'>
                  <p>Postal Code</p>
                  <p>ERT 2354</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default settings;