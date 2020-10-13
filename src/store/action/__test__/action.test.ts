import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  HERO_REQUEST,
  HERO_FAILURE,
  HERO_SUCCESS,
} from "./../action";
import {
  searchFailure,
  searchRequest,
  searchSuccess,
  heroFailure,
  heroSuccess,
  heroRequest,
} from "../action";

import * as data from "../../../middleware/__test__/batman.json";
import * as heroData from "../../../middleware/__test__/hero.json";

describe("action functions", () => {
  it("should return search request action", () => {
    const expectedResults = {
      type: SEARCH_REQUEST,
      name: "batman",
      loading: true,
      types: [SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE],
    };
    expect(searchRequest("batman")).toEqual(expectedResults);
  });

  it("should return search success action", () => {
    const expectedResults = {
      type: SEARCH_SUCCESS,
      payload: data,
      loading: false,
    };
    expect(searchSuccess(data)).toEqual(expectedResults);
  });

  it("should return search failure action", () => {
    const expectedResults = {
      type: SEARCH_FAILURE,
      payload: { error: "Error", msg: "hero not found" },
      loading: false,
    };
    expect(searchFailure({ error: "Error", msg: "hero not found" })).toEqual(
      expectedResults
    );
  });

  it("should return hero request action", () => {
    const expectedResults = {
      type: HERO_REQUEST,
      id: "100",
      loading: true,
      types: [HERO_REQUEST, HERO_SUCCESS, HERO_FAILURE],
    };
    expect(heroRequest("100")).toEqual(expectedResults);
  });

  it("should return hero success action", () => {
    const expectedResults = {
      type: HERO_SUCCESS,
      payload: heroData,
      loading: false,
    };
    expect(heroSuccess(heroData)).toEqual(expectedResults);
  });

  it("should return search failure action", () => {
    const expectedResults = {
      type: HERO_FAILURE,
      payload: { error: "Error", msg: "hero not found" },
      loading: false,
    };
    expect(heroFailure({ error: "Error", msg: "hero not found" })).toEqual(
      expectedResults
    );
  });
});
