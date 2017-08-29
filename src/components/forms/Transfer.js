import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import validation
// import mutation

const numbersOnly = (value, previousValue) => (
  /^\d*\.?\d*?$/.test(value) ? value : previousValue
);

class TransferForm extends Component {
 static defaultProps = {
   balance: '0.000',
 }

 render() {
   const { balance, reset } = this.props;

   return (
     <form>
       <fieldset className="form-group">
         <label htmlFor="to">To</label>
         <div className="input-prefix">
           <Field
             aria-describedby="to"
             className="form-control form-control-lg prefix"
             id="to"
             name="emailAddress"
             type="text"
             component="input"
           />
         </div>
       </fieldset>

       <fieldset className="form-group">
         <div>
           <small className="form-text text-muted"><a>Use Full Balance</a></small>
           <label htmlFor="amount">Amount</label>
           <Field
             aria-describedby="amount"
             className="form-control form-control-lg"
             id="amount"
             name="amount"
             pattern="^[0-9.]*$"
             normalize={numbersOnly}
             required
             component="input"
             type="text"
           />
         </div>
       </fieldset>

       <fieldset className="form-group">
         <label htmlFor="memo">Memo</label>
         <Field
           aria-describedby="emailHelp"
           className="form-control form-control-lg"
           id="memo"
           name="memo"
           type="text"
           component="input"
         />
       </fieldset>

       <div className="row col-12 no-gutters p-0">
         <div className="col-sm-auto col-6 pl-0 pr-2">
           <button
             className="btn btn-primary btn-lg btn-block px-0 px-sm-5"
             type="submit"
           >Submit
           </button>
         </div>
         <div className="col-sm-auto col-6 pl-2 pr-0">
           <button
             className="btn btn-secondary btn-lg btn-block px-0 px-sm-5"
             onClick={reset}
             type="button"
           >Clear
           </button>
         </div>
       </div>
     </form>
   );
 }
}

export default reduxForm({
  form: 'transfer',
})(TransferForm);
