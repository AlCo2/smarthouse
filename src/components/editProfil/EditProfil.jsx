import React, { useEffect, useState } from 'react'
import NavBar from '../navbar/NavBar';
import { useSession } from 'next-auth/react';

export default function EditProfil({notes}){
    const {data:session} = useSession();
    const [countries, setCountries] = useState([]);
    async function fetchCountries(){
        const res = await fetch('/api/countryList');
        const data = await res.json();
        setCountries(data)
    }
    useEffect(()=>{
        fetchCountries();
    }, [])
    return (
    <>
      <NavBar/>
      <div className='settings'>
        <form className='profilSettingsBackground'>
          <div className='profilSettingLabel'>
            <p>My Profile</p>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <div className="userImg">
                <img src={session.user.image} alt="" />
              </div>
              <div className="userNP">
                <input type="text" defaultValue={session.user.name} className='userInputeEdit' name="" id="" />
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="personalInformation">
            <div className='PersonalInfoLabel'><p>personal Information</p></div>
            <div className='PersonelInfo'>
              <div className='Persinfo'>
                <div className='info'>
                  <p>First Name</p>
                  <input type="text" defaultValue={'abdou'} className='userInputeEdit' name="firstName" id="" />
                </div>
                <div className='info'>
                  <p>Last Name</p>
                  <input type="text" defaultValue={'lahboub'} className='userInputeEdit' name="lastName" id="" />
                </div>
              </div>
              <div className='Persinfo'>
                <div className='info'>
                  <p>Email address</p>
                  <input type="text" defaultValue={session.user.email} className='userInputeEdit' name="email" id="" />
                </div>
                <div className='info'>
                  <p>Phone</p>
                  <input type="text" defaultValue={'6432424242'} className='userInputeEdit' name="phone" id="" />
                </div>
              </div>
              <div className='Persinfo'>
                <div className='info'>
                  <p>Bio</p>
                  <input type="text" defaultValue={'software Engineer'} className='userInputeEdit' name="bio" id="" />
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
                <select className='selectCountry' name="country" id="">
                    {countries.length > 0 ? (
                        countries.map((country) => (
                        <option key={country.id} value={country.id}>
                            {country.name}
                        </option>
                        ))
                    ) : (
                        <option>Loading...</option>
                    )}
                </select>
                </div>
                <div className='info'>
                  <p>city</p>
                  <input type="text" defaultValue={'rabat'} className='userInputeEdit' name="city" id="" />
                </div>
              </div>
              <div className='Persinfo'>
                <div className='info'>
                  <p>Postal Code</p>
                  <input type="text" defaultValue={'4121'} className='userInputeEdit' name="postalCode" id="" />
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

