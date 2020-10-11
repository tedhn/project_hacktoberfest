import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from "./../../action/action";
import {
  searchSuccess,
  searchRequest,
  searchFailure,
} from "./../../../types/index";
import searchReducer from "../searchReducer";

describe("search Reudcer", () => {
  it("should return initiate state", () => {
    const action = {};

    //@ts-ignore
    expect(searchReducer({ loading: false }, action)).toEqual({
      loading: false,
    });
  });

  it("should handle SEARCH_REQUEST", () => {
    const actionRequest: searchRequest = {
      type: SEARCH_REQUEST,
      name: "batman",
      loading: true,
      types: [SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE],
    };
    expect(searchReducer({ loading: true }, actionRequest)).toEqual({
      loading: true,
    });
  });

  it("should handle HERO_SUCCESS", () => {
    const actionSuccess: searchSuccess = {
      type: SEARCH_SUCCESS,
      response: { id: "123", name: "batman" },
      loading: false,
    };

    expect(searchReducer({ loading: true }, actionSuccess)).toEqual({
      response: { id: "123", name: "batman" },
      loading: false,
    });
  });

  it("should handle HERO_FAILURE", () => {
    const actionFailure: searchFailure = {
      type: SEARCH_FAILURE,
      response: { response: "error", error: "invalid id" },
      loading: false,
    };

    expect(searchReducer({ loading: true }, actionFailure)).toEqual({
      response: { response: "error", error: "invalid id" },
      loading: false,
    });
  });
});
