/* eslint-disable no-undef */
import React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";
import { ModelValidator } from "react-formawesome-core";

import { Form } from "../src";

class Model {
    name = undefined;
}

describe("Form", () => {

  test("Should render correctly", () => {
    const tree = renderer.create(
      <Form onSubmit={() => undefined} validator={new ModelValidator(Model)}>
          <View />
      </Form>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});