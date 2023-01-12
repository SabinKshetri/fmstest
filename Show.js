import React from 'react'
import CosData from './CosData'
import Addcos from './Addcos'
export default function Show() {
  return (
    <div className='con'>
      
        <button className='btn' type='submit' onClick="document.getElementsByclassName('btn').classList.toggle('container')">ADD</button>
        <div>
        <section>
            <table border='1px'>
              <thead>
                <tr>
                    <th>
                        <input type='checkbox'/>
                    </th>
                    <th>S.N</th>
                    <th>Customer Name</th>
                    
                    
                    <th>Business Name</th>
                    <th>Sales Due</th>
                    <th>Address Line 1</th>
                   
                   
                    
                    <th>Mobile No.</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {

                  CosData.map((a) =>(
                         <tr>
                         <th><input type='checkbox'></input></th>
                         <th>{a.id}</th>
                         <td>{a.CustomerName}</td>
                         <td>{a.BusinessName}</td>
                         <th>{a.SalesDue}</th>
                         <th>{a.Address}</th>
                         <th>{a.mobileNo}</th>
                         <th>{a.action}</th>
                         </tr>
))

                    }
                   
                
                </tbody>
            </table>
        </section>
        </div>
        <div><Addcos/></div>
        
    </div>
  )
}
