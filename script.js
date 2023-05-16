    //case
    //plusCase
    const plusButton = document.getElementById('plusCase');
      plusButton.addEventListener('click', function(){
       const inputValue = document.getElementById('caseInput').value;
       const newValue = parseFloat(inputValue);
       const afterValue = newValue+1 ;
      document.getElementById('caseInput').value = afterValue;

      const priceCase = document.getElementById('casePrice').innerText;
       const newCase = parseFloat(priceCase);
       const updatePrice = newCase + 59 ;
      document.getElementById('casePrice').innerText = updatePrice;

      const pricePhone = document.getElementById('phonePrice').innerText;
      const newPrice = parseFloat(pricePhone);

    
      const finalSubTotal = updatePrice + newPrice ;
      document.getElementById('subTotal').innerText = finalSubTotal;

      const tax = document.getElementById('tax').innerText;
      const newTax = parseFloat(tax);
      const updateTax = newTax + finalSubTotal / 10;
      document.getElementById('tax').innerText = updateTax;
    
    
      const finalTotal = updatePrice + newPrice + updateTax ;
      document.getElementById('Total').innerText = finalTotal;
})
    //minusCase
    const minusCase = document.getElementById('minusCase');
      minusCase.addEventListener('click', function(){
         const inputValue = document.getElementById('caseInput').value;
         const newValue = parseFloat(inputValue);
         const afterValue = newValue-1 ;
       document.getElementById('caseInput').value = afterValue;
    
        const priceCase = document.getElementById('casePrice').innerText;
         const newCase = parseFloat(priceCase);
         const updatePrice = newCase - 59 ;
        document.getElementById('casePrice').innerText = updatePrice;

         
    
        const pricePhone = document.getElementById('phonePrice').innerText;
        const newPrice = parseFloat(pricePhone);

    
       const finalSubTotal = updatePrice + newPrice ;
       document.getElementById('subTotal').innerText = finalSubTotal;


       const tax = document.getElementById('tax').innerText;
      const newTax = parseFloat(tax);
      const updateTax = newTax + finalSubTotal / 10;
      document.getElementById('tax').innerText = updateTax;
    
    
      const finalTotal = updatePrice + newPrice + updateTax ;
    
       ;
       document.getElementById('Total').innerText = finalTotal;
    })




    //phone
    
    //plusButtonPhone
    const plusPhone = document.getElementById('plusPhone');
      plusPhone.addEventListener('click', function(){
       const inputPhone = document.getElementById('inputPhone').value;
       const newPhone = parseFloat(inputPhone);
       const afterPhone = newPhone+1 ;
      document.getElementById('inputPhone').value = afterPhone;

      const pricePhone = document.getElementById('phonePrice').innerText;
       const newPrice = parseFloat(pricePhone);
       const updatePrice = newPrice + 1219 ;
      document.getElementById('phonePrice').innerText = updatePrice;

      const priceCase = document.getElementById('casePrice').innerText;
      const priceNew = parseFloat(priceCase);

    
      const finalSubTotal = updatePrice + priceNew ;
      document.getElementById('subTotal').innerText = finalSubTotal;
      
      const tax = document.getElementById('tax').innerText;
      const newTax = parseFloat(tax);
      const updateTax = newTax + finalSubTotal / 10;
      document.getElementById('tax').innerText = updateTax;
    
    
      
    
      const finalTotal = updatePrice + priceNew +updateTax ;
      document.getElementById('Total').innerText = finalTotal;

    
    })
    

    //minusButtonPhone
    const minusPhone = document.getElementById('minusPhone');
      minusPhone.addEventListener('click', function(){
       const inputMinus = document.getElementById('inputPhone').value;
        const newMinus = parseFloat(inputMinus);
       const afterMinus = newMinus-1 ;
      document.getElementById('inputPhone').value = afterMinus;

      const pricePhone = document.getElementById('phonePrice').innerText;
       const newPhone = parseFloat(pricePhone);
       const updatePrice = newPhone - 1219 ;
      document.getElementById('phonePrice').innerText = updatePrice;

      const finalSubTotal = updatePrice + priceNew ;
      document.getElementById('subTotal').innerText = finalSubTotal;
      
      const tax = document.getElementById('tax').innerText;
      const newTax = parseFloat(tax);
      const updateTax = newTax + finalSubTotal / 10;
      document.getElementById('tax').innerText = updateTax;
    
      const finalTotal = updatePrice + priceNew + updateTax ;
      document.getElementById('Total').innerText = finalTotal;
    })

     //iphoneRemove Button
    const removePhone = document.getElementById('phoneRemove');
      removePhone.addEventListener('click', function(){
        document.getElementById('phoneRow').style.display = "none";
        const iphonePrice = document.getElementById('phonePrice').innerText;
      const setPrice = parseFloat(iphonePrice);

        const newSuubtotal = document.getElementById('subTotal').innerText;
         const updatedSubTotal = parseFloat(newSuubtotal);
         const removedSubTotal = updatedSubTotal - setPrice ;
        document.getElementById('subTotal').innerText = removedSubTotal;

        
        const Total = document.getElementById('Total').innerText;
         const updatedTotal = parseFloat(Total);
         const removedTotal = updatedTotal - setPrice ;
        document.getElementById('Total').innerText = removedTotal;
        
    })

    //caseRemoveButton


    const removeCase = document.getElementById('caseRemove');
      removeCase.addEventListener('click', function(){
        document.getElementById('caseRow').style.display = "none";
        const casePrice = document.getElementById('casePrice').innerText;
      const setPrice = parseFloat(casePrice);

        const newSuubtotal = document.getElementById('subTotal').innerText;
          const updatedSubTotal = parseFloat(newSuubtotal);
          const removedSubTotal = updatedSubTotal - setPrice ;
        document.getElementById('subTotal').innerText = removedSubTotal;

        const Total = document.getElementById('Total').innerText;
          const updatedTotal = parseFloat(Total);
          const removedTotal = updatedTotal - setPrice ;
        document.getElementById('Total').innerText = removedTotal;
        
    })


    //Order now

    const getStarted = document.getElementById('Order');
      getStarted.addEventListener('click',function(){
        alert("You've successfully placed the order. Thank you!!");
    })





    
    

    