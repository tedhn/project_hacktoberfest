const cors = "https://cors-anywhere.herokuapp.com/";

const API_ROOT = `${cors}https://superheroapi.com/api/4062669620414060`;

export async function callApi(name: string) {
  const url = `${API_ROOT}/search/${name}`;

  try {
    let response = await fetch(url, {
      method: "GET",
      headers: { "X-Request-URL": "" },
    });
    let data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function searchHero(id: string) {
  const url = `${API_ROOT}/${id}`;

  try {
    let response = await fetch(url, {
      method: "GET",
      headers: { "X-Request-URL": "" },
    });

    let data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}
