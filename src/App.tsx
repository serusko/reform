import Form from '../lib/components/Form';
import HtmlField from '../lib/components/HtmlField';

const inits = { firstName: 'John', gender: 'f' };

function App() {
  return (
    <>
      <Form
        initialValues={inits}
        onSubmit={() => {
          console.log('hehe');
        }}
      >
        <HtmlField component="input" name="firstName" />

        <HtmlField component="select" name="gender">
          <option value=""></option>
          <option value="f">Female</option>
          <option value="m">Male</option>
          <option value="o">Unknown</option>
        </HtmlField>
      </Form>
    </>
  );
}

export default App;
