const banks = [
    {
        'samaCode': '55',
        'bankName': 'Banque Saudi Fransi'
    },
    {
        'samaCode': '80',
        'bankName': 'Alrajhi Bank'
    },
    {
        'samaCode': '10',
        'bankName': 'National Commercial Bank'
    },
    {
        'samaCode': '45',
        'bankName': 'Saudi British Bank'
    },
    {
        'samaCode': '30',
        'bankName': 'Riyad Bank'
    },
    {
        'samaCode': '52',
        'bankName': 'Arab National Bank'
    },
    {
        'samaCode': '13',
        'bankName': 'Bank Albilad'
    },
    {
        'samaCode': '40',
        'bankName': 'Alinma Bank'
    },
    {
        'samaCode': '19',
        'bankName': 'Saudi National Bank'
    },
    {
        'samaCode': '29',
        'bankName': 'Saudi Investment Bank'
    },
    {
        'samaCode': '60',
        'bankName': 'Samba Financial Group'
    },
    {
        'samaCode': '70',
        'bankName': 'Bank AlJazira'
    },
    {
        'samaCode': '77',
        'bankName': 'Gulf International Bank'
    },
    {
        'samaCode': '78',
        'bankName': 'The National Commercial Bank'
    },
    {
        'samaCode': '82',
        'bankName': 'Al Ahli Bank of Kuwait'
    },
    {
        'samaCode': '98',
        'bankName': 'Banque Libano-Française'
    },
    {
        'samaCode': '84',
        'bankName': 'Al Baraka Bank'
    }
];

function checkIban(iban) {


    if (!iban) { 
        return false; 
    }

    iban = iban.replaceAll(' ', ''); 
    if (iban.length !== 24) { 
        return false;
    }

    if (!iban.startsWith("SA")) { 
        return false;
    }

    return true;
}


function GetIban() {
    var iban = document.getElementById("iban").value;
    var result = document.getElementById("result");

 
    iban = iban.trim();

    
    if (iban.includes(' ')) {
        result.innerHTML = "غير صحيح";
        return;  
    }


    if (!checkIban(iban)) { 
        result.innerHTML = "غير صحيح"; 
    } else { 
        result.innerHTML = "صحيح"; 
        iban = iban.replace(/\s+/g, ''); 
        
        const samaCode = iban.substring(4, 6); 
        console.log('Extracted SamaCode: ', samaCode);  
        
       
        var samaCodeElement = document.getElementById("samaCodeDisplay");
        samaCodeElement.innerHTML = "Sama Code: " + samaCode; 

        const BankName = banks.find(e => e.samaCode == samaCode); 
        const bn = document.getElementById("bank"); 
        const bankresult = document.getElementById("bank1");
        
        bn.innerHTML = "اسم البنك: ";
        bankresult.innerHTML = BankName ? BankName.bankName : "غير معروف";
    }
}

