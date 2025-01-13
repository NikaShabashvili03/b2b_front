import React, { useState } from "react";
import styles from "./payment.module.css";
import ExportToXls from "./ExportToXls"
import { useSelector } from "react-redux";
import { useAuth } from "../../../context/AuthContext";

const Payment = () => {
    const { data } = useSelector((state) => state.cart)
    const { user } = useAuth()
    let issuedDate = `${new Date().getDate()}/${new Date().getMonth()+4}/${new Date().getFullYear()}`
    let dueDate = `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`
    let invoiceNumber = "12345"
    const totalDiscountedAmount = data?.reduce((acc, item) => acc + parseInt(item.totalPrice), 0);
    
    return (
        <div className={styles.invoicecontainer}>
            <div className={styles.header}>
                <h1>Invoice</h1>
                <p>Invoice No: #{invoiceNumber}</p>
                <p>Issued on: {issuedDate}</p>
            </div>

            <div className={styles.invoiceinfo}>
                <div>
                    <p><strong>Pay to the order of:</strong></p>
                    <p>{user.name}</p>
                </div>
                <div>
                    <p><strong>gamyidveli:</strong></p>
                    <p><strong>s/n:</strong></p>
                </div>
                <div>
                    <p><strong>myidveli:</strong></p>
                    <p><strong>s/n:</strong></p>
                </div>
                <div>
                    <div>
                        <p><strong>mimgebis banki</strong></p>
                    </div>
                </div>
                <div className={styles.date}>
                    <p><strong>Due Date:</strong></p>
                    <p>{dueDate}</p>
                </div>
            </div>

            <table className={styles.invoicedetails}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.product.id}>
                            <td>{item.product.prod_id}</td>
                            <td>{item.product.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.product.discountedPrice}</td>
                            <td>{item.totalPrice}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <td slot="3">{totalDiscountedAmount.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>

            <div className={styles.amountinwords}>
                <p><strong>Amount in Words:</strong> Six hundred twenty dollars and 00/100</p>
            </div>
            
            <ExportToXls 
                data={data}
                invoiceNumber={invoiceNumber}
                dueDate={dueDate}
                user={user}
                issueDate={issuedDate}
                totalAmountDue={totalDiscountedAmount}
            />

            <div className={styles.footer}>
                <p>Thank you for your business!</p>
                <p>For payments, please make checks payable to [Your Business Name].</p>
                <p>Bank Account Number: 123456789 | Routing Number: 987654321</p>
            </div>
        </div>
    );
};

export default Payment;
