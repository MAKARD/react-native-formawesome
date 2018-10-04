/* eslint-disable no-undef */
import React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";
import { ModelValidator } from "react-formawesome-core";

import { Form, FormGroup, Select } from "../src";

class Model {
    name = undefined;
}

describe("Select", () => {
    test("Should render correctly", () => {
        const tree = renderer.create(
          <Form onSubmit={() => undefined} validator={new ModelValidator(Model)}>
              <FormGroup attribute="name">
                  <Select options={[{value: "test", label: "test"}]} />
              </FormGroup>
          </Form>
        ).toJSON();
      
        expect(tree).toMatchSnapshot();
      });
      
      test("Should call onValueChange event if it passed", () => {
          let onChangeTriggered = false;
        
          const tree = renderer.create(
              <Form onSubmit={() => undefined} validator={new ModelValidator(Model)}>
                  <FormGroup attribute="name">
                      <Select 
                          options={[{value: "test", label: "test"}]}
                          onValueChange={() => onChangeTriggered = true}
                      />
                  </FormGroup>
              </Form>
          );
      
          tree.root.findByType(Select).instance.getHandleChange({onChange: () => {}})();
          expect(onChangeTriggered).toBeTruthy();
      });
      
      test("Should apply error styles if error exist", () => {
          const tree = renderer.create(
              <Form onSubmit={() => undefined} validator={new ModelValidator(Model)}>
                  <FormGroup attribute="name">
                      <Select 
                          options={[{value: "test", label: "test"}]}
                          onErrorStyles={{backgroundColor: "#fff"}}
                          style={{paddingLeft: 0}}
                      />
                  </FormGroup>
              </Form>
          );
      
      
          expect(tree.root.findByType(Select).instance.getStyle({error: "error"}))
              .toMatchObject({
                  backgroundColor: "#fff",
                  paddingLeft: 0,
              });
      });
});
