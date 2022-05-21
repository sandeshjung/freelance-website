var jsrecommender = require("js-recommender");
 
var recommender = new jsrecommender.Recommender();
const Rating = require("../models/ratings");



router.get('/', (req, res) => {

    Rating.find({  })
        .then((Rating) => {
            console.log('Data: ', Rating);
            res.json(Rating);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


var model = recommender.fit(Rating);
console.log(Rating);
predicted_table = recommender.transform(Rating);


// function sortingListForRecomm(){
//     let ratingListOfList = [];
//     axios.get('/')
//     .then((response) => {

//     console.log(userList[0]);
//     console.log(jobList.length);

//     for (let i=0; i < userList.length; i++){
//         let ratingListForEachUser = [];
//         for (let j=0; j < jobList.length; j++){
//             var uId = userList[i];
//             var jId = jobList[j];
//             var isavailable = false;
//             for(let x=0; x < ratingList.length ; x++ ){
//                 if (ratingList[x]['jobId'] == jId && ratingList[x]['fId'] == uId){
//                     isavailable = true;
//                     ratingListForEachUser.push(ratingList[x]['ratings']);
//                     break;
//                 } 
                
//             }
//             if(!isavailable){
//                 ratingListForEachUser.push(0);
//             }
//             console.log(ratingList.length)
            

//         }
//         ratingListOfList.push(ratingListForEachUser);
//     }
//     console.log(ratingListOfList[0]);

//     var recommender = require('recommender');
//     var ratings = ratingListOfList;
//     for (let i=0 ;i<userList.length;i++)
//     {
//         var f=userList=[i];
//         for(let j=0;j<jobList.length;j++)
//         {
//             var j=jobList[0];
//             if(j=0){
//             var predictedRating = recommender.getRatingPrediction(ratings, j, f, (predictedRating) => {
//                 console.log(predictedRating);
//             })
//         }
//         }
//         var predictedRating = recommender.getRatingPrediction(ratings, j, f, (predictedRating) => {
//             console.log(predictedRating);
//     })
// }
//     })}