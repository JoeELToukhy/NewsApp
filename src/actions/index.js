  
export function getRepos(response) {
    return{
      type: 'Get_Repos',
      payload: response
    }
  }
export function articleSelected(article){
    return{
      type: 'Article_Selected',
      payload: article
    }
  }