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

  const CardMaker = {
      makeFrontMessage: function() {
          console.log(this.wish);
      },
      makeInsideMessage: function() {
          console.log(this.inside);
      }
    
  }

  const birthday = Object.create(CardMaker);
  birthday.wish = "Happy Birthday";
  birthday.makeFrontMessage();

  const anniversary = Object.create(CardMaker);
  anniversary.wish = "Happy Anniversary";
  anniversary.makeFrontMessage();
  

  const birthdayInside = Object.create(CardMaker);
  birthdayInside.inside = "Have a blast on your Birthday";
  birthdayInside.makeInsideMessage();

  const anniversaryInside = Object.create(CardMaker);
  anniversaryInside.inside = "Happy times together";
  anniversaryInside.makeInsideMessage();