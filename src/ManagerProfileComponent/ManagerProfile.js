import React, { useState,useEffect } from 'react'
import "./managerProfile.css"

const ManagerProfile = () => {



    const [showEditBtn,setShowEditButton] = useState(true)
    const [showSaveBtn,setShowSaveButton] = useState(true)
    const [showCancelBtn,setShowCancelButton] = useState(true)

    const [showPasswordEditBtn,setShowPasswordEditButton] = useState(true)
    const [showPasswordSaveBtn,setShowPasswordSaveButton] = useState(true)
    const [showPasswordCancelBtn,setShowPasswordCancelButton] = useState(true)

    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")


// State to store data from json
const [managerData,setManagerProfileData] = useState([]);
  
// Fetch Data..
const getManagerProfileData = () => {
  fetch('managerProfile.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
        setManagerProfileData(myJson)
        console.log(managerData)
    });
}


useEffect(()=>{
    getManagerProfileData()
},[])

    const handleEditClick = () => {
        setShowEditButton(false)
        setShowSaveButton(true)
        setShowCancelButton(true)
        const firstNameManager =document.getElementById("firstNameManager")
        firstNameManager.style.width="243px"

        const lastNameManager =document.getElementById("firstNameManager")
        lastNameManager.style.width="243px"
    }

    const handleSaveManager = () => {
        setManagerProfileData( prev =>[{
            "firstName":firstName,
            "lastName":lastName,
            "email":email
        }])

        setShowEditButton(true)
        setShowSaveButton(false)
        console.log("save")
       
    }

    const handleCancelManager = () => {
        setShowEditButton(true)
        setShowCancelButton(false)
        console.log("save")
    }


    const handlePasswordChange = () => {
        setShowPasswordEditButton(false)
        setShowPasswordSaveButton(true)
        setShowPasswordCancelButton(true)
    }

    const handleSavePasswordManager = () => {
        setShowPasswordEditButton(true)
        setShowPasswordSaveButton(false)
    }

    const handleCancelPasswordManager = () => {
        setShowPasswordEditButton(true)
        setShowPasswordCancelButton(false)
    }

  return (
   <>
    {
        managerData.map((item) => (
            <>
            <div className="profileSetting">
                <h1>Profile Setting</h1>
            </div>
            
            <div className='managerProfile'>
                <div className="managerProfileContainer">
            <div className="managerNameImageContainer">
                
                <div className="managerNameContainer">
                    <div className="managerImageAndName">
                        <div className="managerImage">
                            <img src="./images/managerIcon.png" alt="" />
                            <div className="editManager">
                                <img src="./images/EditManager.svg" alt="" />
                            </div>
                        </div>
    
                        <div className="managerName">
                           <h2>{item.firstName} {item.lastName}</h2>
                            <p>{item.truckCompany}</p>
                        </div>  
                    </div>
    
                    {/* <div className="dismissManagerProfile">
                        <img src="./images/dismissManagerProfile.svg" alt=""/>
                    </div> */}
                </div>
            </div>
    
            <div className="dividerBorder"></div>
    
            <div className="basicInfo">
                <h3>Basic Information</h3>
                <img src="./images/editIconManager.svg" alt=""  style={showEditBtn ?{display:"flex"} : {display:"none"}}
                        onClick={() => handleEditClick()}/>
            </div>
            <div className="dividerBorderBasicInfo"></div>
            <div className="firstLastName">
                <div className="firstNameManager" id='firstNameManager'>
                    <label htmlFor="">First Name</label>
                    {showEditBtn && <h3>{item.firstName}</h3>}
                    {!showEditBtn && <input type="text" onChange={(e) => setFirstName(e.target.value)}/>}
                </div>
                <div className="lastNameManager" id='lastNameManager'>
                    <label htmlFor="">Last Name</label>
                    {showEditBtn &&<h3>{item.lastName}</h3>}
                    {!showEditBtn && <input type="text" onChange={(e) => setLastName(e.target.value)}/>}
                </div>
            </div>
            
            <div className="emailAndLanguage">
                <div className="emailManager">
                        <label htmlFor="">Email</label>
                        {showEditBtn &&<h3>{item.email}</h3>}
                        {!showEditBtn && <input type="text" onChange={(e) => setEmail(e.target.value)}/>}
                </div>

                <div className="languagePreferrence">
                    <label htmlFor="">Preferred Language</label>
                    
                    <div class="input-group mb-3">
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Marathi">Marathi</option>
                        <option value="Punjabi">Punjabi</option>
                    </select>
                    </div>
                </div>
            </div>
    
            {!showEditBtn && <div className="managerSaveAndCancelBtn">
                <button className='managerSaveBtn' style={showSaveBtn ? {display:"block"}:{display:"none"}} onClick={() => handleSaveManager()}>Save</button>
                <button className='managerCancelBtn' style={showCancelBtn ? {display:"block"}:{display:"none"}} onClick={() => handleCancelManager()}>Cancel</button>
            </div>}

            <div className="dividerBorderPasswordTop"></div>
            <div className="passwordInfo">
                <h3>Password Information</h3>
                <img src="./images/editIconManager.svg" alt="" 
                style={showPasswordEditBtn ?{display:"flex"} : {display:"none"}}
                onClick={() => handlePasswordChange()}/>
            </div>
            <div className="dividerBorderPasswordBottom"></div>

            {showPasswordEditBtn && <div className="passwordInput">
                <label htmlFor="">Current Password</label>
                <input type="Password" disabled={true}/>
            </div>}
    
            {!showPasswordEditBtn && 
            <>
            <div className="oldNewPasswordInput">
                <div className="oldPasswordManager">
                    <label htmlFor="">Type Old Password</label>
                    <input type="password" />
                </div>
    
                <div className="newPasswordManager">
                    <label htmlFor="">Confirm New Password</label>
                    <input type="password" />
                </div>
            </div>
    
            <div className="managerSaveAndCancelBtn">
                <button className='managerSaveBtn' style={showPasswordSaveBtn ? {display:"block"}:{display:"none"}} onClick={() => handleSavePasswordManager()}>Save</button>
                <button className='managerCancelBtn' style={showPasswordCancelBtn ? {display:"block"}:{display:"none"}} onClick={() => handleCancelPasswordManager()}>Cancel</button>
            </div>
            </>
            }
    
        </div>    
        </div>
        </>
        ))
    }

        
    </>
  )
}

export default ManagerProfile