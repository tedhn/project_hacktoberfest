import {
  HERO_REQUEST,
  HERO_SUCCESS,
  HERO_FAILURE,
} from "./../../action/action";
import { heroSuccess, heroRequest, heroFailure } from "./../../../types/index";
import heroReducer from "../heroReducer";

describe("hero reducer", () => {
  it("should return initiate state", () => {
    const action = {};

    //@ts-ignore
    expect(heroReducer(undefined, action)).toEqual({ loading: true });
  });
  it("should handle HERO_REQUEST", () => {
    const actionRequest: heroRequest = {
      type: HERO_REQUEST,
      id: "100",
      loading: true,
      types: [HERO_REQUEST, HERO_SUCCESS, HERO_FAILURE],
    };
    expect(heroReducer({ loading: true }, actionRequest)).toEqual({
      loading: true,
    });
  });

  it("should handle HERO_SUCCESS", () => {
    const actionSuccess: heroSuccess = {
      type: HERO_SUCCESS,
      response: { id: "123", name: "batman" },
      loading: false,
    };

    expect(heroReducer({ loading: true }, actionSuccess)).toEqual({
      response: { id: "123", name: "batman" },
      loading: false,
    });
  });

  it("should handle HERO_FAILURE", () => {
    const actionFailure: heroFailure = {
      type: HERO_FAILURE,
      response: { response: "error", error: "invalid id" },
      loading: false,
    };

    expect(heroReducer({ loading: true }, actionFailure)).toEqual({
      response: { response: "error", error: "invalid id" },
      loading: false,
    });
  });
});
