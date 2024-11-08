import React, { useState } from "react";
import styles from "./payment.module.css";
import ExportToXls from "./ExportToXls"
const Payment = () => {
    const [quantities, setQuantities] = useState({
        item1: 10,
        item2: 1,
    });

    const handleClick = () => {
        alert('Styled Button clicked!');
    };

    const increaseQuantity = (item) => {
        setQuantities((prev) => ({
            ...prev,
            [item]: prev[item] + 1,
        }));
    };

    const decreaseQuantity = (item) => {
        setQuantities((prev) => ({
            ...prev,
            [item]: prev[item] > 1 ? prev[item] - 1 : 1, // Prevent going below 1
        }));
    };

    return (
        <div className={styles.invoicecontainer}>
            <ExportToXls />
            <div className={styles.header}>
                <h1>Invoice</h1>
                <p>Invoice No: #12345</p>
                <p>Issued on: 11/08/2024</p>
            </div>

            <div className={styles.invoiceinfo}>
                <div>
                    <p><strong>Pay to the order of:</strong></p>
                    <p>John Doe</p>
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
                        <td>
                            <div className={styles.quantityControl}>
                                <button onClick={() => decreaseQuantity('item1')}>-</button>
                                <span>{quantities.item1}</span>
                                <button onClick={() => increaseQuantity('item1')}>+</button>
                            </div>
                        </td>
                        <td>$50.00</td>
                        <td>${(quantities.item1 * 50).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>Website Hosting</td>
                        <td>
                            <div className={styles.quantityControl}>
                                <button onClick={() => decreaseQuantity('item2')}>-</button>
                                <span>{quantities.item2}</span>
                                <button onClick={() => increaseQuantity('item2')}>+</button>
                            </div>
                        </td>
                        <td>$120.00</td>
                        <td>${(quantities.item2 * 120).toFixed(2)}</td>
                    </tr>
                    <tr className={styles.totalrow}>
                        <td colSpan="4">Total Amount Due:</td>
                        <td>${(quantities.item1 * 50 + quantities.item2 * 120).toFixed(2)}</td>
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
