# SubmitButton

Button for submitting form.

*`SubmitButton` should be wrapped into `Form`*

## Public interface

### Props

`SubmitButton` contains [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity) component from [react-native](https://github.com/facebook/react-native) lib. All props for `TouchableOpacity` are valid for `SubmitButton`.


Provide own props:
 - `loadingComponent` - component that will render while form submitting. `Optional`.
 - `disableOnSubmit` - preventing the sending of an event when the previous event has not ended. `Optional`. Default `true`.

## Example

```jsx
<Form 
    onSubmit={async (values) => await someRequest(values)}
    validator={new SchemaValidator(ExampleSchema)}
    errorParser={(error) => myCustomParser(error)}
>
    <FormGroup attribute="surname" validateOn="blur">
        <Input />
    </FormGroup>
    <SubmitButton loadingComponent={<Text>Submitting...</Text>}>
        <Text>Submit form</Text>
    </SubmitButton>
</Form>
```
