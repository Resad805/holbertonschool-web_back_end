const user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Guillaume',
    lastName: 'Johns',
    location: 'Netherlands',
    occupation: 'Engineer',

    logWelcomeUser(welcomeString){
        return (welcomeString + ', ' + this.firstName + '. Your occupation is: ' + this.occupation)
    }

}
const bindLogWelcomeUser = user.logWelcomeUser.bind(user);
console.log(bindLogWelcomeUser('Hello'));