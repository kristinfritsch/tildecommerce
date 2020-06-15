class Etherscan {
  network = "mainnet";

  constructor(network = "mainnet") {
    this.network = network;
  }

  get apiKey() {
    return "NMP361651P5PUDV2U6XV4H171MVE2RXASZ";
  }

  get apiHost() {
    switch (this.network) {
      case "mainnet":
        return "api.etherscan.io";
      case "testnet":
        return "api-ropsten.etherscan.io";
      default:
        throw new Error("Unsupported network: " + this.network);
    }
  }

  get contractAddress() {
    switch (this.network) {
      case "mainnet":
        return "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
      case "testnet":
        return "0x07865c6e87b9f70255377e024ace6630c1eaa37f";
      default:
        throw new Error("Unsupported network: " + this.network);
    }
  }

  getETHPrice() {
    return $.getJSON(
      `https://${this.apiHost}/api?module=stats&action=ethprice&apikey=${this.apiKey}`
    );
  }

  getAddressBalance(address) {
    return $.getJSON(
      `https://${this.apiHost}/api?module=account&action=tokenbalance&contractaddress=${this.contractAddress}&address=${address}&tag=latest&apikey=${this.apiKey}`
    );
  }

  getMostRecentTokenTransfers(address, limit = 5) {
    return $.getJSON(
      `https://${this.apiHost}/api?module=account&action=tokentx&contractaddress=${this.contractAddress}&address=${address}&page=1&offset=${limit}&sort=desc&apikey=${this.apiKey}`
    );
  }
}
