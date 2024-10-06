
// string is a set of character inside Qoutes.

// 1.create
let age=12; //not string
let state=""
let name="1";
let address='delhi';
const email=`${age }hietechmentor@gamil.com`


// 2. access
//      a. charat   

     let a="hello";
          // console.log(a.charAt(1));



        //  b. treate as an  array
          let result=a[0]
          // console.log(result)


        //   string is a immutable

        a[0]="s";
        // console.log(a)

        // we can assign variable name to a new string 
        a="hitech"
        // console.log(a)


        // multilines string 
        const msg="this is a hitech mentor institute \ which provide the training and courses\ in latest tech like nodejs, mogodb"
// console.log(msg)
let msg2="    this is a first msg1 "+"this is second msg "+"this is 3 msg     "
// console.log(msg2)

// string lenght 

// console.log(msg2.length)


// string method 

// 1.chartAt(index)
// 2.concat()
// 3.replace()
// 3.split()
// 5.substr(start,end)
// 6.substring(start,end)
// slice(start,end)
// 8.toLowerCase()
// 9.toUpperCase()
// 10.trim()
// 11.includes()
// 12.search()






// 1.chartAt(index)= its return the characteer at the spacified index.
// 1.chartAt(index)
// 1.chartAt(index)
// 1.chartAt(index)


let message="hitech is an institute in delhi."

let resultOfmsg=message.charAt(7)
// console.log(resultOfmsg)

// 2.concat()
// 2.concat()
// 2.concat()
// 2.concat()
// joins two or more strings 
let firstName="shamshad";;
let lasname="Husain";
  let  fullname=firstName.concat(" ",lasname);
  // console.log(fullname)


// 3.replace()===>replaces a string with another string


let text="visit Google!"
  let ResultReplaceStr=text.replace("Google/","Microsoft") //replace google with microsoft
  // console.log(ResultReplaceStr)


  let text2="visit Google and Google is a reputed company "
  let ResultReplaceStr2=text.replace(/Google/g,"Microsoft") //replace google with microsoft
  // console.log(ResultReplaceStr2)

  // 3.split()
  // 3.split()
  // 3.split()
  // 3.split()==>converting string  to an array
  let text3="visit Google!"
       let resultsplit=text3.split();
       console.log(resultsplit)

// 5.substr(start,end)
// 5.substr(start,end)
// 5.substr(start,end)==> extracts a part of string.2.does not change the original array.(include)
let text4="visit Google!"
           let resultsubstr=text4.substr(1,4)

           console.log(resultsubstr)


           // 6.substring(start,end)==>extracts a part of string.2.does not change the original array.(exclude)
           let text5="visit Google!"
           let resultsubstring5=text5.substring(1,4)

           console.log(resultsubstring5)


           // slice(start,end)
           // slice(start,end)
           // slice(start,end) ==>retunbs a part of string(not include)


           let longmsg="I am shamshad husain .i have 5 years of expreince as a software developer . "
           let shortslicemsg=longmsg.slice(0,15)
           console.log(shortslicemsg)

           // touppercase()
           let longmsguppercase=longmsg.toUpperCase()
           console.log(longmsguppercase)

           let newlowecase="   I AM SHAMSHAD HUSAIN .I HAVE 5 YEARS OF EXPREINCE AS A SOFTWARE DEVELOPER . "
           let resultLoweCase=newlowecase.toLowerCase()
           console.log(resultLoweCase)

           // 10.trim()==>removes whitespaces from the string.

           let trimstring=resultLoweCase.trim()
           console.log(trimstring)

// includes()
// includes()
// includes()==>searchs for stringand returns  a boolean value.
let text6="searchs for string and returns  a boolean value."
  let IncludeResult=text6.includes("search")
  console.log(IncludeResult)


  // search()===>
  // search()===>
  // search()===>searches for string and returns a position of match.


  let text7="please locate where 'locate' occurs!"
  let searchResult=text7.search("locate")
  console.log(searchResult)