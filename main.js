/*
const CardMaker = {
    makeFrontMessage: function(string) {
      return `<h2>${string}</h2>`
    }
  }
  console.log(this.string);
  */
  
  //Refactor this to link this object to cardMaker
  //const BirthdayCard = Object.create();
const moreCards = {
    childrensCard: "Happy Birthday, kiddo",
    adultCard: "Happy Birthday, Mom"
}


  const CardMaker = {
      makeFrontMessage: function(wish) {
          console.log(this.wish);
        //return `<h2>${wish}</h2>`
      },
      makeInsideMessage: function() {
          console.log(this.inside);
      }
    
  }

  const birthday = Object.create(CardMaker);
  birthday.wish = "Happy Birthday";
  birthday.makeFrontMessage();
  birthday.inside = "Have a blast on your Birthday";
  birthday.makeInsideMessage();


  /*const birthdayInside = Object.create(CardMaker);
  birthdayInside.inside = "Have a blast on your Birthday";
  birthdayInside.makeInsideMessage();*/

  const childBirthday = Object.create(birthday);
  childBirthday.wish = "Happy Birthday, kiddo";
  childBirthday.makeFrontMessage();

  const adultBirthday = Object.create(birthday);
  adultBirthday.wish = "Happy Birthday, Mom";
  adultBirthday.makeFrontMessage();

  const anniversary = Object.create(CardMaker);
  anniversary.wish = "Happy Anniversary";
  anniversary.makeFrontMessage();
  anniversary.inside = "Happy times together on your Anniversary";
  anniversary.makeInsideMessage();

  /*const anniversaryInside = Object.create(CardMaker);
  anniversaryInside.inside = "Happy times together on your Anniversary";
  anniversaryInside.makeInsideMessage(); */