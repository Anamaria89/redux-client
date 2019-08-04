import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { compose } from '../../../../../Users/Ama/AppData/Local/Microsoft/TypeScript/3.4.5/node_modules/redux';
import '../HeaderStyle.css';
const required = value => value ? undefined : 'Required';
const passwordsMatch = (value, allValues) => 
  value !== allValues.password ? 'Passwords dont match' : undefined;
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <div>
        <input {...input} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
class Register extends Component {
    
    onSubmit = formProps => {
        this.props.register(formProps, () => {
            this.props.history.push('/feature');
        });
    }
    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                 <fieldset>
                    <label>Name</label>
                    <Field
                        name="name"
                        type="text"
                        component="input"
                    />
                </fieldset>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                
                <div>
                    {this.props.errorMessage}
                </div>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label>Password Confirm</label>
                    <Field
                        name="password_confirmation"
                        type="password"
                        component={renderField}
                        autoComplete="none"
                        validate={[ required, passwordsMatch ]}
                    />
                </fieldset>
                
               
                <button>Register</button>
            </form>
        );
    }
}
function mapStateToProps(state){
    return { 
        errorMessage: state.auth.errorMessage,
        passwordMessage: state.auth.passwordMessage
     };
}
export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'register' })
)(Register);

