import moment from 'moment'

var articlesViewed= [];
export default function(state=articlesViewed, action){
  switch (action.type) {
    case "Articles_Viewed": {
        if (articlesViewed.includes(action.payload)) {
          articlesViewed.splice(articlesViewed.indexOf(action.payload),1);
          articlesViewed.push(action.payload);

        } else {
          articlesViewed.push(action.payload)
        }
        const index = articlesViewed.findIndex(e=>e===action.payload)
        articlesViewed[index] = {...articlesViewed[index],time:moment().format('h:mm:ss a')}
        return articlesViewed;
    }
    break;
}
  return articlesViewed;
}