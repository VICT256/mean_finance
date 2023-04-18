const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()

 let currentTrade = {}
 let currentSelectedSide;
 let accounts;


// document.getElementById("swap_button").disabled = 

// $(document).ready(function () {
//     $("#from_select_token").click(
//         function(){
//             // $("#swap_button").hide();
//             openModal('from')
//         }
//     )
// })




function selectToken(token) {

    currentTrade[currentSelectedSide] = token
    console.log("current trade", currentTrade)
    // document.getElementById("from_select_token").innerHTML = token.name
    if(currentTrade.from){
        // document.getElementById("from_select_token").innerHTML = currentTrade.from.name + " " + currentTrade.from.topic
        document.getElementById("from_img").src = currentTrade.from.logoURI
        document.getElementById("from_symbol").innerHTML = currentTrade.from.symbol
    }

    if(currentTrade.to){
        // document.getElementById("to_select_token").innerHTML = currentTrade.to.name + " " + currentTrade.to.topic
        document.getElementById("to_img").src = currentTrade.to.logoURI
        document.getElementById("to_symbol").innerHTML = currentTrade.to.symbol
    }
    closeModal();
}

 
  async function getPrice() {
     // var value =  document.getElementById("from_amount").value 

    // if( !currentTrade.from || !currentTrade.to || !value) return;

    // var selltoken = currentTrade.from.symbol
    // var buytoken =currentTrade.to.symbol
    // var sellamount = Number( value * 10**currentTrade.from.decimals)
    // // var amount = Number(1000000000000000)
     try {
            // const request =await fetch(`https://api.0x.org/swap/v1/price?sellToken=${selltoken}&buyToken=${buytoken}&sellAmount=${sellamount}`)
            const request =await fetch("https://api.0x.org/swap/v1/price?sellToken=ETH&buyToken=WETH&sellAmount=1000000000000000000")
            const response= await request.json(); 
             console.log(response)

             //replace the to_ammount with the response gotten 
             document.getElementById("to_amount").value = response.buyAmount
             document.getElementById("gas_estimate").innerText = response.estimatedGas

            // if(response.code === 100){
            //     console.log(err)
            // }
     }catch(err){
        // alert("Token does not exeits")
        console.error(err)
     }
   
}

// getPrice()



async function getQuote () {
    // connect()
    // var value = document.getElementById("from_amount").value

    // if(!currentTrade.from || !currentTrade.to || !document.getElementById("from_amount").value) return;
    
    // var selltoken = currentTrade.from.symbol 
    // var buytoken = currentTrade.to.symbol
    // var sellamount  = Number(value * currentTrade.from.decimals)
    // var  takerAddress = accounts[0]
    var takerAddress = "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"
    
   try {
    const request =await fetch(`https://api.0x.org/swap/v1/quote?sellToken=ETH&buyToken=DAI&sellAmount=1000000000000000000&takerAddress=${takerAddress}`)
    //   
      const response = await request.json()
      console.log(response)
      return response;

   } catch (error) {
      console.error(error.reason)
   }


}




 async  function trySwap () {
    // We want to set token allowance, thereby allowing a third-party address or contract to spend our token for us
      // if we need the tojenFrom contract to spend the token on our behalf we need to 

      //   const fromAddress = currentTrade.from.fromAddress
     
       
      const abi =  [{"inputs":[{"internalType":"uint256","name":"chainId_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"address","name":"usr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"arg1","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"arg2","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"deny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"bool","name":"allowed","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"rely","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
        const wbtcABI = [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"reclaimToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]
        const wbtcContAdd = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
        var address = "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"

        const contract = new ethers.Contract(wbtcContAdd,wbtcABI, signer)
         
        //  var  maxAmount = ethers.BigNumber.from(0)
        // const approve = await contract.approve("0x0000000000000000000000000000000000000000", maxAmount)
          var quote = getQuote()
         const tx = signer.sendTransaction(quote)
         const receipt = await tx.wait()

         const transactionHash = await provider.send('eth_sendTransaction', quote)
        console.log('transactionHash is ' + transactionHash);

        //  console.log(receipt)
        // Query the last 100 blocks for any transfer
            // var filter = contract.filters.Transfer
            // var events = await contract.queryFilter(filter, -100)
            // var balanc = await contract.balanceOf("0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5")
            // var code = await provider.getCode(wbtcContAdd)
        //  console.log(code)
             
            // var code = await provider.getCode(wbtcContAdd)


            //   var total = await contract.totalSupply()

            //   console.log(ethers.utils.formatUnits(total))

            // console.log(ethers.utils.formatUnits(balanc))
            
        //

    
}



async function openModal(side) {
    currentSelectedSide = side;
    await listAllTokens()
    document.getElementById("modal").style.display = "block"
    document.getElementById("container").style.opacity = 0.2
    

    
}

async function closeModal() {
    document.getElementById("modal").style.display = "none"
    document.getElementById("container").style.opacity = 1

     
}


const listAllTokens = async () => {

    const response = await fetch("https://tokens.coingecko.com/uniswap/all.json")
    const allToken =  await response.json()
    const tokens = allToken.tokens
    console.log(tokens)

      var array = [
        { topic : "main", name : "ajs"},
        { topic : "alpha", name : "oemgae"},
        { topic : "nnas", name : "calis"}
      ]
    for (const i in tokens) {
        // console.log(token)
        //   var text = `<div class= "single_list" id = "single_list">
        //                     <span>${array[i].topic} </>
        //                     <span>${array[i].name} </> 
        //              </div>`

        //       $(".modal_list").append(text)

         let div = document.createElement("div");
            div.className = "single_list";
            div.id = "single_list"
                // For each row, display the token image and symbol
                let html = `
                        <img src = ${tokens[i].logoURI} />
                        <span> ${tokens[i].symbol} </span>
                `;
            div.innerHTML = html;
            
            let parent = document.getElementById("modal_list")

                parent.appendChild(div);

            //    $(".single_list").click((e)=>{
            //             e.preventDefault();
            //               selectToken(array[i])
            //          })
              
            // document.getElementsById("single_list").onclick = ()=> {selectToken(array[i])}
            div.onclick = ()=> {selectToken(tokens[i])}

        } 
    }
   
    // <span class="token_list_img" > ${array[i].name} </span>
    // <span class="token_list_text">${array[i].topic}</span>
   
// listAllTokens()

 
async function connect () {
   

        if ( window.ethereum) {

        try{
            accounts = await  window.ethereum.request({ method:  "eth_requestAccounts" });
             console.log(accounts)
            }catch (err){
                console.error(err.message)
            }

            document.getElementById("sign_button").innerHTML = accounts[0]
            document.getElementById("swap_button").disabled = false


        }else {
            document.getElementById("sign_button").innerHTML = "Install Meatamask"
        }
   

}



document.getElementById("sign_button").onclick = ()=>{ connect()}

document.getElementById("from_select_token").onclick = () =>{ openModal("from")}

document.getElementById("to_select_token").onclick = () =>{ openModal("to")}

document.getElementById("modal_close").onclick = closeModal

// document.getElementById("from_amount").onchange = getPrice

document.getElementById("swap_button").onclick =()=> {
    // getPrice();
    // getQuote()
    trySwap()
} 
