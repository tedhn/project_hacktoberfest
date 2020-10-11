import { takeLatest } from "redux-saga/effects";
import {
  SEARCH_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
} from "./../../store/action/action";
import * as data from "./batman.json";
import * as heroData from "./hero.json";

import { callApi } from "../api";

import { searchSaga, heroSaga, getData, getHero } from "../saga";

const searchHeroByName = jest.fn(async (url: string) => {
  return Promise.resolve({
    json: () => Promise.resolve(data),
  });
});

const searchHeroById = jest.fn(async (url: string) => {
  return Promise.resolve({
    json: () => Promise.resolve(heroData),
  });
});

describe("api tests", () => {
  it("returns the right data when searching with name", async () => {
    let response = await searchHeroByName(
      "https://superheroapi.com/api/4062669620414060/search/batman"
    );
    let json = await response.json();

    expect(json).toEqual(data);
  });

  it("returns the right data when seaching with id", async () => {
    let response = await searchHeroById(
      "https://superheroapi.com/api/4062669620414060/70"
    );
    let json = await response.json();

    expect(json).toEqual(heroData);
  });
});

describe("searchSaga test", () => {
  const genObject = searchSaga();

  it("should wait for the latest search action call", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("SEARCH_REQUEST", getData)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("heroSaga test", () => {
  const genObject = heroSaga();

  it("should wait for the latest search action call", () => {
    expect(genObject.next().value).toEqual(takeLatest("HERO_REQUEST", getHero));
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
