# ErrorTip

Component for notify user about errors.

*`ErrorTip` should be wrapped into `FormGroup`*

## Public interface

### Props

`ErrorTip` contains [Text](https://facebook.github.io/react-native/docs/text) component from [react-native](https://github.com/facebook/react-native) lib. All props for `Text` are valid for `ErrorTip`.

*If error not exist, `ErrorTip` will not render `Text`*

## Example

```jsx
<Form 
    onSubmit={async (values) => await someRequest(values)}
    validator={new SchemaValidator(ExampleSchema)}
    errorParser={(error) => myCustomParser(error)}
>
    <FormGroup attribute="surname" >
        <ErrorTip />
    </FormGroup>
</Form>
```
