class Etherscan {
  get apiKey() {
    return "NMP361651P5PUDV2U6XV4H171MVE2RXASZ";
  }

  getAddressBalance(address) {
    return $.getJSON(
      `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&address=${address}&tag=latest&apikey=${this.apiKey}`
    );
  }

  getMostRecentTokenTransfers(address, limit = 5) {
    return $.getJSON(
      `https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&address=${address}&page=1&offset=${limit}&sort=desc&apikey=${this.apiKey}`
    );
  }
}
