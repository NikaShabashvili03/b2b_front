import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Import the plugin for table support

function InvoiceDownload() {
  const invoiceData = {
    invoiceNumber: "#12345",
    issueDate: "11/08/2024",
    dueDate: "11/22/2024",
    client: {
      name: "John Doe",
      address: "123 Main Street",
      cityStateZip: "City, State, ZIP",
    },
    items: [
      { item: "001", description: "Web Development Services", quantity: "10 hours", unitPrice: 50.0, total: 500.0 },
      { item: "002", description: "Website Hosting", quantity: "1 year", unitPrice: 120.0, total: 120.0 },
    ],
    totalAmountDue: 620.0,
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Title and Invoice Info
    doc.setFontSize(16);
    doc.setTextColor(255, 0, 0);
    doc.text("INVOICE", 14, 20);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Invoice No: ${invoiceData.invoiceNumber}`, 14, 30);
    doc.text(`Issued on: ${invoiceData.issueDate}`, 14, 36);
    doc.text(`Due Date: ${invoiceData.dueDate}`, 14, 42);

    // Client Info
    doc.text("Pay to the order of:", 14, 52);
    doc.text(invoiceData.client.name, 14, 58);
    doc.text(invoiceData.client.address, 14, 64);
    doc.text(invoiceData.client.cityStateZip, 14, 70);

    // Table for items~
    const tableColumn = ["Item", "Description", "Quantity", "Unit Price", "Total"];
    const tableRows = invoiceData.items.map((item) => [
      item.item,
      item.description,
      item.quantity,
      `$${item.unitPrice.toFixed(2)}`,
      `$${item.total.toFixed(2)}`,
    ]);

    // Add the table to the PDF
    doc.autoTable({
      startY: 80,
      head: [tableColumn],
      body: tableRows,
      theme: "grid",
      headStyles: { fillColor: [200, 200, 200] },
      styles: { halign: "right" },
    });

    // Total Amount Due
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.text("Total Amount Due:", 100, finalY);
    doc.setFont("helvetica", "bold");
    doc.text(`$${invoiceData.totalAmountDue.toFixed(2)}`, 160, finalY);

    // Footer with Thank You Note
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Amount in Words: Six hundred twenty dollars and 00/100", 14, finalY + 10);
    doc.text("Thank you for your business!", 14, finalY + 20);
    doc.text("For payments, please make checks payable to [Your Business Name].", 14, finalY + 26);
    doc.text("Bank Account Number: 123456789 | Routing Number: 987654321", 14, finalY + 32);

    // Save the PDF
    doc.save(`Invoice_${invoiceData.invoiceNumber}.pdf`);
  };

  return (
    <div>
      <button onClick={generatePDF}>Download Invoice as PDF</button>
    </div>
  );
}

export default InvoiceDownload;
