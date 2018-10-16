/* eslint-disable no-undef */
import React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";
import { ModelValidator } from "react-formawesome-core";

import { Form, UnparsedErrorContainer } from "../src";

class Model {
    name = undefined;
}

describe("UnparsedErrorContainer", () => {

  test("Should render correctly", () => {
    const tree = renderer.create(
      <Form onSubmit={() => undefined} validator={new ModelValidator(Model)}>
          <UnparsedErrorContainer>
            {() => <View />}
          </UnparsedErrorContainer>
      </Form>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("Should render error view if error exist", () => {
    const render = renderer.create(
      <Form onSubmit={() => undefined} validator={new ModelValidator(Model)}>
          <UnparsedErrorContainer>
            {() => <View />}
          </UnparsedErrorContainer>
      </Form>
    );

    const errorTree = renderer.create(
      render.root.findByType(UnparsedErrorContainer).instance.renderChildren("")
    ).toJSON();

    expect(errorTree).toMatchSnapshot();
  });

});
