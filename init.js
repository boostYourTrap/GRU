window.onload = function() {
    const initPerson = personGenerator.getPerson();

    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = `${initPerson.gender},` ;
    document.getElementById('birthYearOutput').innerText = `${initPerson.birthYear} года рождения` ;
    document.getElementById('birthDateOutput').innerText = initPerson.birthDate ; 
    document.getElementById('professionOutput').innerText = initPerson.profession;
    
    const middleNameElement = document.getElementById('middleNameOutput');

    if(middleNameElement) {
        middleNameElement.innerText = initPerson.middleName;
    } else {
        const newMiddleNameElement = document.createElement('span');
        newMiddleNameElement.id = 'middleNameOutput';
        newMiddleNameElement.innerText = initPerson.middleName;
        const parentH4 = document.querySelector('h4 span#firstNameOutput');

        if (parentH4) {
            const spaceNode = document.createTextNode(' ');
            parentH4.parentNode.insertBefore(spaceNode, parentH4.nextSibling);
            parentH4.parentNode.insertBefore(newMiddleNameElement, spaceNode.nextSibling);
            // console.log(parentH4.nextSibling); отлично, пробел добавился 
            
        }
    }

    document.getElementById('clearButton').addEventListener('click', () => {
        document.getElementById('surnameOutput').innerText = '-----' ;
        document.getElementById('firstNameOutput').innerText = '-----' ;
        document.getElementById('middleNameOutput').innerText = '-----' ;
        document.getElementById('genderOutput').innerText = '-----' ;
        document.getElementById('birthYearOutput').innerText = '-----' ;
        document.getElementById('birthDateOutput').innerText = '-----' ;
        document.getElementById('professionOutput').innerText = '-----' ; 
    } )

    document.getElementById('generateButton').addEventListener('click', () => {
        const newPerson = personGenerator.getPerson();

        document.getElementById('firstNameOutput').innerText = newPerson.firstName;
        document.getElementById('middleNameOutput').innerText = newPerson.middleName;
        document.getElementById('surnameOutput').innerText = newPerson.surname;
        document.getElementById('genderOutput').innerText = `${newPerson.gender},` ;
        document.getElementById('birthYearOutput').innerText = `${newPerson.birthYear} года рождения` ;
        document.getElementById('birthDateOutput').innerText = newPerson.birthDate ; 
        document.getElementById('professionOutput').innerText = newPerson.profession;
    })
}