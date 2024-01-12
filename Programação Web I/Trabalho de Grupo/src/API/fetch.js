const keyAuto = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTMwZTU1NWIzNjg2OGViMTU3Nzk1ZGY1N2IyNTc0MyIsInN1YiI6IjY0ZWZhN2E4ZGJiYjQyMDBmZWQ1NTEyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cwbEeKc7snUcK-o_o8v7BnWeGyT-FdJFQ4PdzzwZAUs';

export async function fetchData(page) {
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;

  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': keyAuto,
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}