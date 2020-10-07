const API_ROOT = "https://superheroapi.com/api/4062669620414060";

export async function callApi(username: string) {
  const url = API_ROOT + username;

  try {
    let response = await fetch(url);
    let data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}
