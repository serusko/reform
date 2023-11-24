import { FormValues } from '../lib';
import Form from '../lib/components/Form';
import HtmlField from '../lib/components/HtmlField';

import './app.css';

const inits = { age: 10, firstName: 'John', gender: 'f' };

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Form initialValues={inits} onSubmit={(data) => console.log(data)}>
        <div className="card">
          <h2 style={{ marginBottom: '2rem' }}>Html elements example</h2>
          <div className="row">
            <HtmlField component="input" label="First Name" name="firstName" />

            <HtmlField component="input" label="Last Name" name="lastName" />
          </div>
          <div className="row">
            <HtmlField
              required
              component="input"
              label="Age"
              max={100}
              min={1}
              name="age"
              type="range"
            />

            <HtmlField required component="input" label="Age" name="age" type="number" />

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
            <HtmlField
              required
              component="input"
              label="Date of Birth"
              name="birthDate"
              type="date"
            />
            <HtmlField
              required
              component="input"
              label="Time of Birth"
              name="birthTime"
              type="time"
            />
          </div>

          <div className="row">
            <HtmlField required component="input" label="Avatar" name="avatar" type="file" />
            <HtmlField required component="input" label="Avatar" name="color" type="color" />
          </div>

          <FormValues>{(values) => <pre>{JSON.stringify(values, null, 2)}</pre>}</FormValues>
        </div>
      </Form>
    </div>
  );
}

export default App;
