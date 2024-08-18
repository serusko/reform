import * as y from 'yup';

import Form from '../lib/components/Form';
import HtmlField from '../lib/components/HtmlField';
import { Data } from '../lib/context';
import FormErrors from '../lib/renderers/FormErrors';
import FormState from '../lib/renderers/FormState';
import FormValues from '../lib/renderers/FormValues';
import { getRequired, useValidation } from '../lib/yupHelpers';

import './app.css';

const inits = { age: 10, firstName: '', gender: 'o' };

const schema = y.object({
  birthDate: y
    .string()
    .nullable()
    .when(['firstName'], ([firstName], schema) => (firstName ? schema.required() : schema))
    .when(['age'], ([age], schema) => {
      const a = new Date(
        new Date(new Date().setFullYear(new Date().getFullYear() - age)).setHours(23, 59, 59, 999),
      );

      const b = new Date(
        new Date(new Date().setFullYear(new Date().getFullYear() - age - 1)).setHours(0, 0, 0, 0),
      );

      if (!age) {
        return schema;
      }
      return schema.test(
        'inRange',
        `Date of Birth should be between ${b.toLocaleDateString()} and ${a.toLocaleDateString()}`,
        (value) => {
          if (!value) {
            return true;
          }
          const v = new Date(value);
          return b <= v && v <= a;
        },
      );
    })
    .default(null),
  firstName: y.string().nullable().required().default(null),
  lastName: y.string().nullable().required().default(null),
});

const getRequiredFn = (data: Data) => {
  return getRequired(schema.describe({ value: data }));
};

function App() {
  const validation = useValidation(schema);

  return (
    <>
      <div
        style={{
          alignItems: 'flex-start',
          background: 'rgb(13, 17, 23)',
          color: '#fff',
          display: 'flex',
          fill: '#fff',
          flexDirection: 'row',
          margin: '2rem',
          padding: '2rem',
        }}
      >
        <svg viewBox="0 0 400 750" width={25}>
          <polygon points="0,0 400,0 400,350 0,350 161,175" />
          <polygon points="0,405 325,750 0,750" />
          <polygon points="75,400 400,400 400,750" />
        </svg>
        <div style={{ marginLeft: '0.5rem' }}>
          <h1
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: 36,
              fontWeight: 700,
              lineHeight: 1,

              marginTop: -6,
              verticalAlign: 'top',
            }}
          >
            REFORM
          </h1>
          <h2 style={{ fontFamily: "'Roboto Mono', monospace" }}>React Form</h2>
        </div>
      </div>
      <Form
        getRequired={getRequiredFn}
        initialValues={inits}
        validation={validation}
        onSubmit={(data) => console.log(data)}
      >
        <div className="card">
          <h2 style={{ marginBottom: '2rem' }}>Html elements example</h2>
          <div className="row">
            <HtmlField component="input" label="First Name" name="firstName" />

            <HtmlField component="input" label="Last Name" name="lastName" />
          </div>
          <div className="row">
            <HtmlField component="input" label="Age" max={100} min={1} name="age" type="range" />

            <HtmlField component="input" label="Age" name="age" type="number" />

            <HtmlField component="select" label="Gender" name="gender">
              <option value=""></option>
              <optgroup label="Biological">
                <option value="f">Female</option>
                <option value="m">Male</option>
              </optgroup>
              <option value="o">Other</option>
            </HtmlField>

            <div>
              <div className="row">
                <div className="col">
                  <label>Do you agree to Terms & Conditions?</label>
                  <div className="row">
                    <HtmlField
                      component="input"
                      label="Yes"
                      name="agreement"
                      type="radio"
                      value="yes"
                    />
                    <HtmlField
                      component="input"
                      label="No"
                      name="agreement"
                      type="radio"
                      value="no"
                    />
                  </div>
                </div>
                <div>
                  <HtmlField
                    component="input"
                    label="I Agree with Terms & Conditions"
                    name="agreement"
                    type="checkbox"
                    value="yes"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <HtmlField component="input" label="Date of Birth" name="birthDate" type="date" />
            <HtmlField component="input" label="Time of Birth" name="birthTime" type="time" />
          </div>

          <div className="row">
            <HtmlField component="input" label="Avatar" name="avatar" type="file" />
            <HtmlField component="input" label="Avatar" name="color" type="color" />
          </div>

          <div className="row">
            <div className="col">
              <label>Values</label>
              <FormValues>{(values) => <pre>{JSON.stringify(values, null, 2)}</pre>}</FormValues>
            </div>

            <div className="col">
              <label>Errors</label>
              <FormErrors>{(errors) => <pre>{JSON.stringify(errors, null, 2)}</pre>}</FormErrors>
            </div>

            <div className="col">
              <label>Touched</label>
              <FormState>
                {({ touched }) => <pre>{JSON.stringify(touched, null, 2)}</pre>}
              </FormState>
            </div>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default App;
