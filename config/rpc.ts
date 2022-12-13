const ETH = {
  mainnet: ["https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
  goerli: [
    "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    "https://ethereum-goerli.publicnode.com",
    "https://eth-goerli.public.blastapi.io",
    "https://goerli.infura.io/v3/70c6b6dda3984cae8fc908bfefab0428",
    "https://goerli.infura.io/v3/dd22121523124779a2e443b78e284517",
  ],
  localnet: ["http://127.0.0.1:8545/"],
};

const BSC = {
  mainnet: ["https://bsc-dataseed1.binance.org/"],
  testnet: [
    "https://data-seed-prebsc-1-s1.binance.org:8545/",
    "https://data-seed-prebsc-2-s3.binance.org:8545/",
    "https://data-seed-prebsc-1-s3.binance.org:8545/",
  ],
};

const POLYGON = {
  mainnet: ["https://polygon-rpc.com/"],
  testnet: [
    "https://polygon-mumbai-bor.publicnode.com",
    "https://matic-mumbai.chainstacklabs.com",
    "https://rpc-mumbai.matic.today",
    "https://rpc-mumbai.maticvigil.com",
  ],
};

const MELD = {
  mainnet: ["https://subnets.avax.network/meld/mainnet/rpc"],
  testnet: ["https://subnets.avax.network/meld/testnet/rpc"],
};

const SKALE = {
  mainnet: [],
  testnet: ["https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix"]
}

export const rpc = { ETH, BSC, POLYGON, MELD, SKALE };
