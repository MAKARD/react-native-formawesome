# Form

Root component that provide context to nested children.

## Public interface

### Props

`Form` contains [View](https://facebook.github.io/react-native/docs/view.html) component from [react-native](https://github.com/facebook/react-native) lib. All props for `View` are valid for `Form`.

Also `Form` represents [FormProvider](https://github.com/MAKARD/react-formawesome-core/blob/master/docs/FormProvider.md) from [react-formawesome-core](https://github.com/MAKARD/react-formawesome-core) package. All props for `FormProvider` are valid for `Form`.


## Example

```jsx
<Form 
    onSubmit={async (values) => await someRequest(values)}
    validator={new SchemaValidator(ExampleSchema)}
    errorParser={(error) => myCustomParser(error)}
>
    ...
</Form>
```