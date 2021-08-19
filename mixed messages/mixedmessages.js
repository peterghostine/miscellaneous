// Yogi Berra quotes. Specify an arbitrary number of quotes inside a string. Add/remove quotes as needed.
const yB = "Always go to other people's funerals, otherwise they won't come to yours.|\
If you don't know where you are going, you'll end up someplace else.|\
You can observe a lot just by watching.|\
When you come to a fork in the road, take it.|\
The future ain't what it used to be.|\
Nobody comes here anymore. It's too crowded.|\
Cut my pie into four pieces, I don’t think I could eat eight.|\
Half the lies they tell about me aren't true.|\
Okay you guys, pair up in threes!|\
It's tough to make predictions, especially about the future.|\
I'd give my right arm to be ambidextrous.|\
We made too many wrong mistakes.|\
A nickel ain't worth a dime anymore.|\
It's getting late early.|\
Little League baseball is a very good thing because it keeps the parents off the streets.|\
If you ask me anything I don't know, I'm not going to answer.|\
He must have made that before he died.|\
Even Napoleon had his Watergate.";

// Split quotes string and add quotes into array.
const arrYB = yB.split('|');

// Famous adages. Specify an arbitrary number of adages. Add/remove quotes as needed.
const adages = "Do not tell someone about your good side to make them stay. Tell them your worst side and see who stays|\
Change is hard at first, messy in the middle and gorgeous at the end.|\
Out of nothing, nothing can come.|\
Life isn’t about finding yourself. Life is about creating yourself.|\
From flowers, bees make honey and spiders poison.|\
One of the hardest things to do in life is letting go of what you thought was real.|\
Stop looking for reasons to be unhappy. Focus on the things you do have, and the reasons you should be happy.|\
When you focus on problems you will have more problems. When you focus on possibilities you’ll have more opportunities.|\
Leaders become great not because of their power but, because of their ability to empower others.|\
You don’t inspire others by being perfect. You inspire them by how you deal with your imperfections.|\
When you do what you fear most, you can do anything.|\
Knowledge equals power.|\
Today is the tomorrow you talked about yesterday.|\
If you want peace, prepare for war.|\
No matter how you feel, get up, dress up, show up, and never give up.|\
What hurts us instructs us.|\
You can do 99 things for some people and all they will remember is the one thing you didn’t do.|\
If you want to fly, give up everything that weighs you down.|\
A great city is a great solitude.|\
Carpe diem. (Seize the day.)|\
Always remember, someone’s effort is a reflection of their interest in you.|\
Never apologize for what you feel. It’s like saying sorry for being real.|\
The squeaky wheel gets the grease."

const arrAdages = adages.split('|');

// Powerball. The function below generates x unique random numbers ranging from 1 to max.
function pickNumbers(x, max) {
    let arrPowerball = [];
    let newPick;
    let isPicked = 0;
    for (let i = 1; i <= x; i++) {
        do {
            newPick = 1 + Math.floor(Math.random() * max);
            isPicked = arrPowerball.findIndex(element => element === newPick);
        } while (isPicked != -1); // Pick another random number if this one's already been picked.
        arrPowerball.push(newPick);
    }
    return arrPowerball.join(' ');
}

// Uncomment line below to test function:
// console.log(pickNumbers(6,64));

/** The function below generates an object that has three properties and a method. 
    The properties consist of: 1 adage, 1 Yogi Berra quote, and 1 Powerball pick. 
    When invoked, the method prints out the 3 properties to the console. 
**/    
function createMixedMessage() {
    const obj = {};
    obj.quote = arrYB[Math.floor(Math.random() * arrYB.length)];
    obj.adage = arrAdages[Math.floor(Math.random() * arrAdages.length)];
    obj.powerball = pickNumbers(6,64);
    obj.mixedMessage = function() {
      console.log('Today\'s Yogi Berra quote: ' + '"' + this.quote + '"');
      console.log('Today\'s wisdom: ' + '"' + this.adage + '"');
      console.log('Today\'s Powerball picks: ' + this.powerball);
    };
    return obj;
}

// Usage: Instantiate a 'Mixed Message' object and then invoke its .mixedMessage method.
const mixedMessage = createMixedMessage();
mixedMessage.mixedMessage();

