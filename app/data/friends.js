// ===============================================================================
// DATA
// Below data will hold all of the reserve friends.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
//array that holds all the 'friends' that have taken the survey
//initialize starting with 'dummy' data
var friendList = [
  {
    fname: 'Jon',
    lname: 'Finley',
    profilePic: 'https://avatars3.githubusercontent.com/u/52939363?s=460&v=4',
    scores: [
      "4",
      "5",
      "5",
      "2",
      "4",
      "5",
      "4",
      "4",
      "3",
      "4"
    ]
  
},
{
fname: 'Phoebe',
lname: 'Buffay',
profilePic: "https://imgix.bustle.com/rehost/2016/9/13/675c9c26-713a-4743-b263-8efff6d12bdd.jpg",
scores: [
"5",
"3",
"5",
"2",
"5",
"3",
"2",
"5",
"3",
"2"
]
}
]

module.exports = friendList;
  