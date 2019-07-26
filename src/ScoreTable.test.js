import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import ScoreTable from "./ScoreTable";

const scoreTableProps = {
  scores: {
    ones: 2,
    twos: 4,
    threes: 6,
    fours: 8,
    fives: 10,
    sixes: 12,
    threeOfKind: 3,
    fourOfKind: 4,
    fullHouse: 25,
    smallStraight: 30,
    largeStraight: 40,
    yahtzee: 50,
    chance: 5
  }
}

it("renders ScoreTable without crashing", function () {
  shallow(<ScoreTable scores={scoreTableProps.scores} />);
});

it("matches snapshot", function () {
  let wrapper = shallow(<ScoreTable scores={scoreTableProps.scores} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

