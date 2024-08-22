$(document).ready(function() {

  function generateFacts() {

      var facts = 
      [
"Your smile is pure joy 😊",
"Yereeeeeee, You're shining today! ❤",
"You're not just smart, you're also absolutely adorable",
"I really admire your sense of style",
"Your laugh is absolutely the best, I promise! ❤",
"You deserve way more recognition than you get! ❤",
"There’s no one quite like you, Yereee! ❤",
"You’re stronger than you realize",
"You’re an incredible friend",
"Every room lights up when you walk in! ❤",
"You should be so proud of how amazing you are! 😘",
"Is that your photo next to 'charming' in the dictionary? 😍",
"Your kindness leaves a lasting impact on everyone",
"You’re off the charts, seriously!",
"You’re truly brave",
"Your inner beauty outshines everything else. (I’m not exaggerating!)",
"You stand firm in your beliefs, and that’s admirable",
"Your eyes are simply mesmerizing",
"You’re like a ray of sunshine on a cloudy day",
"You inspire others to be their best. (Because you’re already the best!) 😍",
"You’re such a great listener",
"How do you manage to always look amazing? ❤",
"If more people were like you, the world would be a better place!",
"I bet you sparkle with every step you take 🌟",
"That color looks absolutely stunning on you!",
"I always have a blast hanging out with you",
"You have such a pleasant scent",
"You might dance like no one’s watching, but trust me, everyone’s watching because you’re incredible!",
"Being around you makes everything feel better",
"When you say 'meant to do that,' I totally believe you",
"You’re most amazing when you’re just being yourself (& beautiful too!)",
"Everything seems brighter when you’re around",
"You’re more fun than a candy-filled ball pit. (And what could be more fun?)",
"You’re simply wonderful 🌟",
"You’re better than the best triple-scoop ice cream cone, with sprinkles! ❄",
"Your hair is absolutely gorgeous",
"You’re one in a million!",
"You’re so inspiring",
"You deserve way more thanks, so thank you!!",
"Anyone is lucky to have someone like you",
"Someone out there is getting through tough times because you’re there for them",
"Your ideas are the best",
"You always manage to find the silver lining",
"Even when life knocks you down, you get right back up and keep going",
"You’re a light in the darkness",
"Being around you feels like a mini-vacation",
"You’re more fun than bubble wrap",
"Your parents should get a medal for raising someone as awesome as you!",
"Your voice is truly magnificent! 🙈",
"The people who love you are lucky to have you in their lives ❤",
"You’re like a breath of fresh air",
"You’re so thoughtful",
"Your creativity knows no bounds",
"You’re absolutely adorable when you blush",
"Your actions speak volumes about the amazing person you are",
"Somehow, you make time both stand still and fly by at the same time. (How do you do that?)",
"You seem to have a really strong sense of self",
"Any team would be beyond lucky to have you",
"In high school, I bet you were voted 'most likely to keep being awesome'",
"If you were a candle, your scent would be Perfectly Imperfect (and it would smell like summer)",
"You’re anything but ordinary",
"You’re someone’s reason to smile. (Thanks for that smile, Yereee!) ❤",
"You’re better than a unicorn because you’re real",
"You’re truly something special ❤",
"You’re a gift to everyone around you ❤",
"Thanks for existing & making everyone around you so lucky! ❤",
"You’re a constant reminder that good (and cute) people do exist in this world ❤",
"This world would be so dull without YOU! 😍",
"If more people were even half as amazing as you, this world would be a much better place",
"You’re more of a superhero than any character from Marvel or DC! 🌟",
"Just thinking about you is enough to make anyone smile 😊",
"WOW! Just, WOW! 😍",
"There should be a monument dedicated to you",
"Keep going! Every day you’re growing & becoming an even better version of yourself",
"You’re not crazy or weak, okay? ❤",
"Sometimes you’ll face setbacks, but just remember that tomorrow brings new possibilities",
      ];

    var randomfacts = Math.floor(Math.random() * facts.length);

    document.getElementById("facts").innerHTML = facts[randomfacts];
  }

  $('.get-facts').on('click', function(event) {
    event.preventDefault();
    generateFacts();
  });
});


$(document).ready(function() {
  $('#yellow-chat').on('click', function() {
      // Show the hidden image and text when the yellow chat image is clicked
      $('#surprise-image').show();
      $('#surprise-text').show();
  });
});
