$(document).ready (function(){

    const web3= new Web3(window.ethereum);

    if(typeof window.ethereum !== "undefined")
    {
        console.log("Metamask is installed");
    }else{
        console.error("please install Metamask to use this app");
    }

    const accountInput= async()=>{
        const accounts= await ethereum.request({method:"eth_requestAccounts"});
        const account= accounts[0];

        if(account)
        {
            $('#accountInput').val();
            $('#accountInput').val(account);
    
            $('#displayNumber').append(account);
        }

       
    }

    const accountLogin= async()=>{
        const accounts= await ethereum.request({method:"eth_requestAccounts"});
        const account= accounts[0];

        if(!accounts.length)
        {
            alert('please install Metamask');
        }else{
            window.location.href="/home";
        }
    }

    const displayBalance= async()=>{
        const accounts= await ethereum.request({method:"eth_requestAccounts"});
        const account= accounts[0];

        await web3.eth.getBalance(account,(err,balance)=>{
            $('#displayBalance').empty().show().append( web3.utils.fromWei(balance,"ether")+' ETH');
        });

        
    }

    $('#Login').on('click',function(){
        accountLogin();
    });

    if(document.getElementById("appointment"))
    {
       accountInput();
       displayBalance();
    }

    $('#contactForm').on('submit',function (e){
        e.preventDefault();
        alert('Thank you! your form has been submitted successfully');
        $('#contactForm')[0].reset();
    });




    
});