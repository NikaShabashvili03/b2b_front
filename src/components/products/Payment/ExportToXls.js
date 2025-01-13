import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Import the plugin for table support

function InvoiceDownload({
  invoiceNumber,
  issueDate,
  dueDate,
  user,
  data,
  totalAmountDue
}) {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Title and Invoice Info
    doc.setFontSize(16);
    doc.setTextColor(255, 0, 0);
    doc.text("INVOICE", 14, 20);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Invoice No: ${invoiceNumber}`, 14, 30);
    doc.text(`Issued on: ${issueDate}`, 14, 36);
    doc.text(`Due Date: ${dueDate}`, 14, 42);

    // Client Info
    doc.text("Pay to the order of:", 14, 52);
    doc.text(user.name, 14, 58);
    // doc.text(invoiceData.user.address, 14, 64);
    // doc.text(invoiceData.user.cityStateZip, 14, 70);

    // Table for items~
    const tableColumn = ["Id", "Name", "Quantity", "Unit Price", "Total"];
    const tableRows = data.map((item) => [
      item.product.prod_id,
      item.product.name,
      item.quantity,
      `$${item.product.discountedPrice}`,
      `$${item.totalPrice}`,
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
    doc.text(`$${totalAmountDue.toFixed(2)}`, 160, finalY);

    // Footer with Thank You Note
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Amount in Words: Six hundred twenty dollars and 00/100", 14, finalY + 10);
    doc.text("Thank you for your business!", 14, finalY + 20);
    doc.text("For payments, please make checks payable to [Your Business Name].", 14, finalY + 26);
    doc.text("Bank Account Number: 123456789 | Routing Number: 987654321", 14, finalY + 32);

    // Save the PDF
    doc.save(`Invoice_${invoiceNumber}.pdf`);
  };

  return (
    <div>
      <button onClick={generatePDF}>Sale</button>
    </div>
  );
}

export default InvoiceDownload;
