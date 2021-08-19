# *MIXED MESSAGES* OVERVIEW
**Mixed Messages** is a project consisting of a single javascript file named *mixedmessages.js*. The purpose of this project is to develop a random message generator program. Each messsage consists of three independent parts:

+ A random *Yogi Berra* quote.
+ A random adage.
+ A randomly-generated *Powerball (TM)* pick.

The code makes it easy to modify the pre-defined quotes and adages. For example, all the adages are pipe-separated ("|") inside a single string that's assigned to the **adages** constant. The same goes for the **yB**, which consists of a single string of pipe-separated Yogi Berra quotes. Feel free to modify their contents to suit your needs.

Finally, both strings are split into corresponding arrays: arrYB and arrAdages by specifying pipe (|) as the separator. 

---
## *pickNumbers* Function
This function is designed to generate *x* unique randomly-generated numbers ranging from 1 to *max* using the **Math** object. The function makes use of the *for* and *do-while* iterators, as well as the array object's *findindex* method to ensure uniqueness.

--- 
## *createMixedMessage* Function
This function's purpose is to create a *Mixed Message* object. When the function is called, it generates a new object consisting of three randomly-generated properties: *quote*, *adage*, and *powerball*. The object also features a method named *mixedMessage* whose purpose is to print out the object's three properties. 
### USAGE:
```javascript
const mixedMessage = createMixedMessage();
mixedMessage.mixedMessage();
```
#### Returns something like this:  
*Today's Yogi Berra quote: "Always go to other people's funerals, otherwise they won't come to yours."*  
*Today's adage: "The squeaky wheel gets the grease."*  
*Today's Powerball picks: 34 22 52 49 14 1*

---
Feel free to contact me for further information at peterghostine@gmail.com.


