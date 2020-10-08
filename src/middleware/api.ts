const API_ROOT = "https://superheroapi.com/api/4062669620414060";

export async function callApi(name: string) {
  const url = `${API_ROOT}/search/${name}`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}
