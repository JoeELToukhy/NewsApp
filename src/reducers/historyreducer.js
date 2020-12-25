import moment from 'moment'

var articlesViewed= [];
export default function(state=articlesViewed, action){
  switch (action.type) {
    case "Articles_Viewed": { articlesViewed.push(action.payload);
    //   console.log(articlesViewed);
    //   console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
      return articlesViewed;
    }
    break;
  }
  return articlesViewed;
}