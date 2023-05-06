let profiles = [
   {
        username: 'eva',
        gender : 'female',
        birthday: '07 February 1990',
    },
    {
        username: 'Mohammad',
        gender : 'Male',
        birthday: '05 May 1998',
    },
    {
        username: 'Majd',
        gender : 'Female',
        birthday: '07 May 1990',
    },
    {
        username: 'Rawan',
        gender : 'Female',
        birthday: '06 May 1990',
    }
]

let profilesContainer = document.getElementById('birthday__profile-container');
let currentDate= new Date();
let  month = currentDate.toLocaleString('default', { month: 'long' });
let day = currentDate.getDay();

function calculateAge(birthday) { 
  const birthDate = new Date(birthday);
  const currentDate = new Date();
  
  let age = currentDate.getFullYear() - birthDate.getFullYear();
 
  return age;
}

for(let profile of profiles){
    let birthday = profile.birthday.split(' ');
    if (birthday[1] === month && birthday[0] == day) {
      profile.age = calculateAge(profile.birthday);
    //Way 1 : The easy way
    let birthdayCount = 0;
    if(profile.gender === "Male") 
      imgSrc = "assets/img/male.png";
      else{
        imgSrc = "assets/img/female.png";
      }
    
      birthdayCount++;

        profilesContainer.innerHTML += ` <div class="birthday__profile">
        <img src="${imgSrc}" alt="">
        <div class="birthday__info">
            <p>${profile.username}</p>
            <p> ${profile.age}</p>
        </div>
    </div>`
   
    document.getElementById('birthday__counter').innerHTML = `${birthdayCount} Birthday today`;

    document.getElementById("btn__clear").addEventListener("click", clear);
    function clear() {
    document.getElementById("birthday__profile-container").style.display='none';
}

    
    }


}



    //Way 2 : The hard way
        //  let profileCard =  document.createElement('div')
        // profileCard.className='birthday__profile';
        // profilesContainer.appendChild(profileCard)
        // let profileImg = document.createElement('img')
        // profileImg.setAttribute('src','assets/img/female.png')
        // profileCard.appendChild(profileImg);
        // let birthdayInfo = document.createElement('div')
        // birthdayInfo.className = 'birthday__info'
        // profileCard.appendChild(birthdayInfo)
        // let username = document.createElement('p')    
        //username.appendChild(document.createTextNode(profile.username))
        //birthdayInfo.appendChild(username)
        //let age = document.createElement('p')    
        //age.appendChild(document.createTextNode(profile.age))
        //birthdayInfo.appendChild(age)
        //console.log(profile)