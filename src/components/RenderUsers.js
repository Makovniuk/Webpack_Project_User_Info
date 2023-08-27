const TODAY = new Date();

function getFullAgeUser(birthDate) {
	const diffAgeDate = TODAY - new Date(birthDate);
	const age = Math.round(diffAgeDate / 31556952000);

	return age;
}

async function renderUser(dataUsersAPI) {
  const dataUsers = await dataUsersAPI('users');

  dataUsers.forEach(user=> {
		const usersList = document.querySelector('tbody');
		const userTr = document.createElement('tr');

		const userFullName = document.createElement('td');
		const userBirthDay = document.createElement('td');
		const userAge = document.createElement('td');
		const userCountry = document.createElement('td');
		const userCompany = document.createElement('td');
		const userEmail = document.createElement('td');
		const userID = document.createElement('td');

		userFullName.innerText = user.name;
		userAge.innerText = getFullAgeUser(user.birthday);
		userEmail.innerText = user.email;
		userCountry.innerText = user.country;
		userCompany.innerText = user.company;
		userBirthDay.innerText = user.birthday.slice(0,10);
		userID.innerText = user.id;

		userTr.append(userFullName, userBirthDay, userAge, userCountry, userCompany, userEmail, userID );
		usersList.append(userTr);userAge
  });

}

export  default renderUser;