import React from 'react'

export default function Addcos() {
  return (
    
    <div className='container'>
      <h1>Add Customer</h1>
      <form>
      <div className='info flex'>
        <label>Name<br/>
        <input type='text' placeholder='Enter name' className='name'></input>
        </label>
       <label>Customer ID<br/>
       <input type='number' className='id' ></input>
       </label>
       <label>Date Of Birth<br/>
       <input type='date' className='dob'></input>
       </label>
      </div>
      <div className='business flex'>
        <label> BusinessName<br/>
        <input type='text' className='bus'></input>
        </label>
        <label> PAN/VAT No.<br/>
        <input type='number' className='pan'></input>
        </label>

        
      </div>
      <div className='main flex'>
        <div>
        <label>Customer Group<br/>
        <input type='text' placeholder='Enter group' className='abc'></input>
        </label><br/>
        <label>Address Lines2<br/>
        <input type='text' placeholder='Enter Address'className='abc'></input>
        </label>
        <br/>
       <label>Mobile number<br/>
       <input type='number' placeholder='Enter mobile number'className='abc'></input>
       </label>
       <br/>
       <label>Contact number<br/>
       <input type='number' placeholder='Enter Contact number'className='abc'></input>
       </label>
       <br/>
       <label>Credit Limit<br/>
        <input type='number' placeholder='Enter limit'required className='abc'></input>
        </label>
        <br/>
       </div>
        <div>
        <label> Address Line1<br/>
        <input type='text' placeholder='Enter address' className='ab'></input>
        </label>
        <br/>
        <label> Address Line3<br/>
        <input type='text' placeholder='Enter address'className='ab'></input>
        </label><br/>
        <label>Telephone number<br/>
        <input type='number' placeholder='Enter telecome number'className='ab'></input>
        </label>
        <br/>
        <label>Email ID<br/>
        <input type='email' placeholder='Enter email id'className='ab'></input>
        </label><br/>
        <label>Credit Days<br/>
        <input type='number'required className='ab'></input>
        </label><br/>
        </div>

      </div>
      
      </form>
      <div className='submit'>
        <button type='submit' className='but'>Submit</button>
        <button type='submit'className='but'>Reset</button>

      </div>
    </div>
  )
}
