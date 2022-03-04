var company_logo = {
    w: 80,
    h: 50
  };
  var comapnyJSON={
    CompanyName:'ABCD TECHONOLOGIES',
    CompanyGSTIN:'37B76C238B7E1Z5',
    CompanyState:'KERALA (09)',
    CompanyPAN:'B76C238B7E',
    CompanyAddressLine1:'ABCDEFGD HOUSE,IX/642-D',
    CompanyAddressLine2:'ABCDEFGD P.O., NEDUMBASSERY',
    CompanyAddressLine3:'COCHIN',
    PIN: '683584',
    companyEmail:'xyz@gmail.com',
    companyPhno:'+918189457845',
  };
  
  var customer_BillingInfoJSON={
    CustomerName:'Jino Shaji',
    CustomerGSTIN:'37B76C238B7E1Z5',
    CustomerState:'KERALA (09)',
    CustomerPAN:'B76C238B7E',
    CustomerAddressLine1:'ABCDEFGD HOUSE,IX/642-D',
    CustomerAddressLine2:'ABCDEFGD P.O., NEDUMBASSERY',
    CustomerAddressLine3:'COCHIN',
    PIN: '683584',
    CustomerEmail:'abcd@gmail.com',
    CustomerPhno:'+918189457845',
  };
  
  
  var customer_ShippingInfoJSON={
    CustomerName:'Jino Shaji',
    CustomerGSTIN:'37B76C238B7E1Z5',
    CustomerState:'KERALA (09)',
    CustomerPAN:'B76C238B7E',
    CustomerAddressLine1:'ABCDEFGD HOUSE,IX/642-D',
    CustomerAddressLine2:'ABCDEFGD P.O., NEDUMBASSERY',
    CustomerAddressLine3:'COCHIN',
    PIN: '683584',
    CustomerEmail:'abcd@gmail.com',
    CustomerPhno:'+918189457845',
  };
  
  
  var invoiceJSON={
    InvoiceNo:'INV-120152',
    InvoiceDate:'03-12-2017',
    RefNo:'REF-78445',
    TotalAmnt:'Rs.1,24,200',
    SubTotalAmnt:'Rs.1,04,200',
    TotalGST:'Rs.2,0000',
    TotalCGST:'Rs.1,0000',
    TotalSGST:'Rs.1,0000',
    TotalIGST:'Rs.0',
    TotalCESS:'Rs.0',
  }
  var fontSizes={
    HeadTitleFontSize:18,
    Head2TitleFontSize:16,
    TitleFontSize:14,
    SubTitleFontSize:12,
    NormalFontSize:10,
    SmallFontSize:8
  };
  var lineSpacing={
    NormalSpacing:12,
  };
  function generatePDF(){
    var doc = new jsPDF('p', 'pt');
    var rightStartCol1=400;
    var rightStartCol2=480;
    var InitialstartX=40;
    var startX=40;
    var InitialstartY=50;
    var startY=0;
    var lineHeights=12;
    doc.setFontSize(fontSizes.SubTitleFontSize);
    doc.setFont("helvetica");
    doc.setFontType('bold');
    
     doc.text(comapnyJSON.CompanyName,startX, startY+=15+company_logo.h,'left');
    doc.setFontSize(fontSizes.NormalFontSize);
    doc.text("GSTIN",startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(comapnyJSON.CompanyGSTIN, 80, startY);
    doc.setFontType('bold');
    doc.text("STATE", startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(comapnyJSON.CompanyState, 80, startY);
    doc.setFontType('bold');
    doc.text("PAN", startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(comapnyJSON.CompanyPAN, 80, startY);
    doc.setFontType('bold');
    doc.text("PIN", startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(comapnyJSON.PIN, 80, startY);
    doc.setFontType('bold');
    doc.text("EMAIL",startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(comapnyJSON.companyEmail, 80, startY);
    doc.setFontType('bold');
    doc.text("Phone: ", startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(comapnyJSON.companyPhno, 80, startY);
    var tempY=InitialstartY;
    doc.setFontType('bold');
    doc.text("INVOICE NO: ",rightStartCol1,tempY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.InvoiceNo, rightStartCol2, tempY);
    doc.setFontType('bold');
    doc.text("INVOICE Date: ",  rightStartCol1, tempY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.InvoiceDate,rightStartCol2, tempY);
    doc.setFontType('bold');
    doc.text("Reference No: ",rightStartCol1,tempY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.RefNo, rightStartCol2, tempY);
    doc.setFontType('bold');
    doc.text("Total: ",  rightStartCol1, tempY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.TotalAmnt, rightStartCol2, tempY);
    doc.setFontType('normal');
    doc.setLineWidth(1);
    doc.line(20, startY+lineSpacing.NormalSpacing, 220, startY+lineSpacing.NormalSpacing);
    doc.line(380, startY+lineSpacing.NormalSpacing, 580, startY+lineSpacing.NormalSpacing);
    doc.setFontSize(fontSizes.Head2TitleFontSize);
    doc.setFontType('bold');
    // doc.text("TAX INVOICE",startX,startY+=lineSpacing.NormalSpacing+2,null,null,'center');
    doc.setFontSize(fontSizes.NormalFontSize);
    doc.setFontType('bold');
    
    //-------Customer Info Billing---------------------
     var startBilling=startY;
  
      doc.text("Billing Address,",startX, startY+=lineSpacing.NormalSpacing);
      doc.text(customer_BillingInfoJSON.CustomerName, startX, startY+=lineSpacing.NormalSpacing);
      doc.setFontSize(fontSizes.NormalFontSize);
      doc.text("GSTIN", startX, startY+=lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.text(customer_BillingInfoJSON.CustomerGSTIN, 80, startY);
      doc.setFontType('bold');
      doc.text("Address", startX, startY+=lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.text(customer_BillingInfoJSON.CustomerAddressLine1, 80, startY);
      doc.text(customer_BillingInfoJSON.CustomerAddressLine2, 80, startY+=lineSpacing.NormalSpacing);
      doc.text(customer_BillingInfoJSON.CustomerAddressLine3, 80,startY+=lineSpacing.NormalSpacing);
      doc.setFontType('bold');
      doc.text("STATE", startX, startY+=lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.text(customer_BillingInfoJSON.CustomerState, 80, startY);
      doc.setFontType('bold');
      doc.text("PIN", startX, startY+=lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.text(customer_BillingInfoJSON.PIN, 80, startY);
      doc.setFontType('bold');
      doc.text("EMAIL", startX, startY+=lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.text(customer_BillingInfoJSON.CustomerEmail, 80, startY);
      doc.setFontType('bold');
      doc.text("Phone: ", startX, startY+=lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.text(customer_BillingInfoJSON.CustomerPhno, 80, startY);
     //-------Customer Info Shipping---------------------
      var rightcol1=340;
      var rightcol2=400;
      startY=startBilling;
      doc.setFontType('bold');
      doc.text("Shipping Address,", rightcol1, startY+=lineSpacing.NormalSpacing);
      doc.text(customer_BillingInfoJSON.CustomerName, rightcol1, startY+=lineSpacing.NormalSpacing);
      doc.setFontSize(fontSizes.NormalFontSize);
      doc.setFontType('bold');
      doc.text("GSTIN", rightcol1, startY+=lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.text(customer_BillingInfoJSON.CustomerGSTIN,rightcol2, startY);
      doc.setFontType('bold');
      doc.text("Address", rightcol1, startY+=lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.text(customer_BillingInfoJSON.CustomerAddressLine1, rightcol2, startY);
      doc.text(customer_BillingInfoJSON.CustomerAddressLine2, rightcol2, startY+=lineSpacing.NormalSpacing);
      doc.text(customer_BillingInfoJSON.CustomerAddressLine3, rightcol2, startY+=lineSpacing.NormalSpacing);
      doc.setFontType('bold');
      doc.text("STATE", rightcol1, startY+=lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.text(customer_BillingInfoJSON.CustomerState, rightcol2, startY);
  
      doc.setFontType('bold');
      doc.text("PIN", rightcol1, startY+=lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.text(customer_BillingInfoJSON.PIN, rightcol2, startY);
      
      doc.setFontType('bold');
      doc.text("EMAIL", rightcol1, startY+=lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.text(customer_BillingInfoJSON.CustomerEmail, rightcol2, startY);
  
      doc.setFontType('bold');
      doc.text("Phone: ", rightcol1, startY+=lineSpacing.NormalSpacing);
      doc.setFontType('normal');
      doc.text(customer_BillingInfoJSON.CustomerPhno, rightcol2, startY);
    
      var header = function(data) {
        doc.setFontSize(8);
        doc.setTextColor(40);
        doc.setFontStyle('normal');
       // doc.textAlign("TAX INVOICE", {align: "center"}, data.settings.margin.left, 50);
   
        //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
       // doc.text("Testing Report", 110, 50);
      };
     doc.setFontSize(8);
     doc.setFontStyle('normal');
    var options = {
        beforePageContent: header,
        margin: {
          top: 50 
        },
        styles: {
          overflow: 'linebreak',
          fontSize: 8,
          rowHeight: 'auto',
          columnWidth: 'wrap'
        },
        columnStyles: {
          1: {columnWidth: 'auto'},
          2: {columnWidth: 'auto'},
          3: {columnWidth: 'auto'},
          4: {columnWidth: 'auto'},
          5: {columnWidth: 'auto'},
          6: {columnWidth: 'auto'},
        },
        startY: startY+=50
      };
    var columns = [
        {title: "ID", dataKey: "id",width: 90},
        {title: "Product", dataKey: "Product",width: 40}, 
        {title: "Rate/Item", dataKey: "Rate/Item",width: 40}, 
        {title: "Qty", dataKey: "Qty",width: 40}, 
        {title: "Dsnt", dataKey: "Dsnt",width: 40}, 
        {title: "S.Total", dataKey: "STotal",width: 40}, 
        {title: "CGST", dataKey: "CGST",width: 40}, 
        {title: "SGST", dataKey: "SGST",width: 40}, 
        {title: "IGST", dataKey: "IGST",width: 40}, 
        {title: "CESS", dataKey: "CESS",width: 40}, 
        {title: "Total", dataKey: "Total",width: 40}, 
    ];
    var rows = [
      {"id": 1, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10","Qty" : "12","Dsnt":"0","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 2, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10","Qty" : "12","Dsnt":"0","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 3, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
      {"id": '', "Product": "", "Rate/Item": "Total","Qty" : "","Dsnt":"20","STotal":"360","CGST":60,"SGST":60,"IGST":0,"CESS":60,"Total":680},
   
    ];
    doc.autoTable(columns, rows, options);
    //-------Invoice Footer---------------------
    var rightcol1=340;
    var rightcol2=430;
  
    startY=doc.autoTableEndPosY()+30;
    doc.setFontSize(fontSizes.NormalFontSize);
    
    doc.setFontType('bold');
    doc.text("Sub Total,", rightcol1, startY+=lineSpacing.NormalSpacing);
    doc.text(invoiceJSON.SubTotalAmnt, rightcol2, startY);
    doc.setFontSize(fontSizes.NormalFontSize);
    doc.setFontType('bold');
    doc.text("CGST Rs.", rightcol1, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.TotalCGST,rightcol2, startY);
    doc.setFontType('bold');
    doc.text("SGST Rs.", rightcol1, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.TotalSGST,rightcol2, startY);
    doc.setFontType('bold');
    doc.text("IGST Rs.", rightcol1, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.TotalIGST,rightcol2, startY);
    doc.setFontType('bold');
    doc.text("CESS Rs.", rightcol1, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.TotalCESS,rightcol2, startY);
    doc.setFontType('bold');
    doc.text("Total GST Rs.", rightcol1, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.TotalGST,rightcol2, startY);
    doc.setFontType('bold');
    doc.text("Grand Total Rs.", rightcol1, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.TotalAmnt,rightcol2+25, startY);
    doc.setFontType('bold');
    doc.text('For '+comapnyJSON.CompanyName+',',rightcol2, startY+=lineSpacing.NormalSpacing+25);
    doc.text('Authorised Signatory',rightcol2, startY+=lineSpacing.NormalSpacing+25);
    doc.save('InvoiceTemplate.pdf');
  }