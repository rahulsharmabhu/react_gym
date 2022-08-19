export const excerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'b597147930msh9501ed79294994ep141843jsn6d62b69d1be8'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'b597147930msh9501ed79294994ep141843jsn6d62b69d1be8',
    },
  };

export const fetchData = async (url,options) =>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}