/* eslint-disable no-undef */
import React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";
import { ModelValidator } from "react-formawesome-core";

import { Form, FormGroup, Input } from "../src";

class Model {
    name = undefined;
}

test("Should render correctly", () => {
  const tree = renderer.create(
    <Form onSubmit={() => undefined} validator={new ModelValidator(Model)}>
        <FormGroup attribute="name">
            <Input />
        </FormGroup>
    </Form>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
