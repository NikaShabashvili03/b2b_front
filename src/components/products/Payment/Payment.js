import React from "react";
import styles from  "./payment.module.css";
import ExportToXls from "./ExportToXls"
const Payment = () => {
    const handleClick = () => {
        alert('Styled Button clicked!');
    };
  return (
       
 <div className={styles.invoicecontainer}>
            <ExportToXls />
            <div className={styles.header}>
                <h1>Invoice</h1>
                <p>Invoice No: #12345</p>
                <p>Issued on: 11/08/2024</p>
            </div>
    
       
            <div classname={styles.invoiceinfo}>
                <div>
                    <p><strong>Pay to the order of:</strong></p>
                    <p>John Doe</p>
                    <p>123 Main Street</p>
                    <p>City, State, ZIP</p>
                </div>
                <div className={styles.date}>
                    <p><strong>Due Date:</strong></p>
                    <p>11/22/2024</p>
                </div>
            </div>
    
         
            <table className={styles.invoicedetails}>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Web Development Services</td>
                        <td>10 hours</td>
                        <td>$50.00</td>
                        <td>$500.00</td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>Website Hosting</td>
                        <td>1 year</td>
                        <td>$120.00</td>
                        <td>$120.00</td>
                    </tr>
                    <tr className={styles.totalrow}>
                        <td colspan="4" >Total Amount Due:</td>
                        <td>$620.00</td>
                    </tr>
                </tbody>
            </table>
    
         
            <div className={styles.amountinwords}>
                <p><strong>Amount in Words:</strong> Six hundred twenty dollars and 00/100</p>
            </div>
            <button onClick={handleClick} className={styles.Button}>
            Sale
        </button>
      
            <div className={styles.footer}>
                <p>Thank you for your business!</p>
                <p>For payments, please make checks payable to [Your Business Name].</p>
                <p>Bank Account Number: 123456789 | Routing Number: 987654321</p>
            </div>
        </div>
    
  );
};

export default Payment;
 