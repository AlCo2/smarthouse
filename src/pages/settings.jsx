import Login from '@/components/login/Login';
import NavBar from '@/components/navbar/NavBar';
import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import EditProfil from '@/components/editProfil/EditProfil';
import { PrismaClient } from '@prisma/client';


export async function getStaticProps() {
  const prisma = new PrismaClient();
  const countries = await prisma.countries.findMany();
  return {
    props : { countries}
  }
}

const settings = ({countries}) => {
  const {data:session} = useSession();
  const [editMode, setEditMode] = useState(false);
  if(!session){
    return(
        <Login/>
    )
  }
  const country = countries.find((country=> country.id == session.user.country));
  if(editMode){
    return(
     <EditProfil countries={countries}/> 
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
                <p>{session.user.bio}</p>
              </div>
            </div>
            <div className="userEdit">
              <button className='userEditBtn' onClick={()=>setEditMode(!editMode)}>Edit</button>
            </div>
          </div>
          <div className="personalInformation">
            <div className='PersonalInfoLabel'><p>personal Information</p></div>
            <div className='PersonelInfo'>
              <div className='Persinfo'>
                <div className='info'>
                  <p>First Name</p>
                  <p>{session.user.firstName}</p>
                </div>
                <div className='info'>
                  <p>Last Name</p>
                  <p>{session.user.lastName}</p>
                </div>
              </div>
              <div className='Persinfo'>
                <div className='info'>
                  <p>Email address</p>
                  <p>{session.user.email}</p>
                </div>
                <div className='info'>
                  <p>Phone</p>
                  <p>{session.user.phone}</p>
                </div>
              </div>
              <div className='Persinfo'>
                <div className='info'>
                  <p>Bio</p>
                  <p>{session.user.bio}</p>
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
                  <p>{country.name}</p>
                </div>
                <div className='info'>
                  <p>city</p>
                  <p>{session.user.city}</p>
                </div>
              </div>
              <div className='Persinfo'>
                <div className='info'>
                  <p>Postal Code</p>
                  <p>{session.user.postalCode}</p>
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