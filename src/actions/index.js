  export function articleSelected(article){
    return{
      type: 'Article_Selected',
      payload: article
    }
  }

  export function sourceSelected(source){
    return{
      type: 'Source_Selected',
      payload: source
    }
  }

  export function articlesViewed(viewed){
    return{
      type: 'Articles_Viewed',
      payload: viewed
    }
  }