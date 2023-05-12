import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../navbar/NavBar';
import { useSession } from 'next-auth/react';


export default function EditProfil({ countries }){
    const {data:session} = useSession();
    const nameRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const bioRef = useRef(null);
    const countryRef = useRef(null);
    const cityRef = useRef(null);
    const postalCodeRef = useRef(null);
    async function handleClick(e) {
      const user_id = session.user.id;
      const name = nameRef.current.value;
      const firstName = firstNameRef.current.value
      const lastName = lastNameRef.current.value
      const email =  emailRef.current.value
      const phone = phoneRef.current.value
      const bio = bioRef.current.value
      const country = countryRef.current.value
      const city = cityRef.current.value
      const postalCode = postalCodeRef.current.value
      // const postalCode = postalCodeRef.current.value
      const res = await fetch('/api/userupdate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          id:user_id,
          name:name,
          firstName:firstName,
          lastName:lastName,
          email:email,
          phone:phone,
          bio:bio,
          countries:country,
          city:city,
          postalCode:postalCode
        }),
      })
      const data = await res.json()
    }
    return (
    <>
      <NavBar/>
      <div className='settings'>
        <form onSubmit={handleClick} className='profilSettingsBackground'>
          <div className='profilSettingLabel'>
            <p>My Profile</p>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <div className="userImg">
                <img src={session.user.image} alt="" />
              </div>
              <div className="userNP">
                <input type="text" defaultValue={session.user.name} ref={nameRef} className='userInputeEdit' name="name" id="" />
                <p>{session.user.bio}</p>
              </div>
            </div>
          </div>
          <div className="personalInformation">
            <div className='PersonalInfoLabel'><p>personal Information</p></div>
            <div className='PersonelInfo'>
              <div className='Persinfo'>
                <div className='info'>
                  <p>First Name</p>
                  <input type="text" defaultValue={session.user.firstName} className='userInputeEdit'ref={firstNameRef} name="firstName" id="" />
                </div>
                <div className='info'>
                  <p>Last Name</p>
                  <input type="text" defaultValue={session.user.lastName} className='userInputeEdit' name="lastName" ref={lastNameRef} id="" />
                </div>
              </div>
              <div className='Persinfo'>
                <div className='info'>
                  <p>Email address</p>
                  <input type="text" defaultValue={session.user.email} className='userInputeEdit' name="email" ref={emailRef} id="" />
                </div>
                <div className='info'>
                  <p>Phone</p>
                  <input type="text" ref={phoneRef} defaultValue={session.user.phone} className='userInputeEdit' name="phone" id="" />
                </div>
              </div>
              <div className='Persinfo'>
                <div className='info'>
                  <p>Bio</p>
                  <input type="text" defaultValue={session.user.bio} ref={bioRef} className='userInputeEdit' name="bio" id="" />
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
                <select defaultValue={session.user.country} className='selectCountry' ref={countryRef} name="country" id="">
                  {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                      {country.name}
                  </option>
                  ))}
                </select>
                </div>
                <div className='info'>
                  <p>city</p>
                  <input type="text" defaultValue={session.user.city} ref={cityRef} className='userInputeEdit' name="city" id="" />
                </div>
              </div>
              <div className='Persinfo'>
                <div className='info'>
                  <p>Postal Code</p>
                  <input type="text" defaultValue={session.user.postalCode} ref={postalCodeRef} className='userInputeEdit' name="postalCode" id="" />
                </div>
              </div>
            </div>
            <div className="userEdit">
              <button className='userEditBtn userConfirmBtn'>Confirm</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
