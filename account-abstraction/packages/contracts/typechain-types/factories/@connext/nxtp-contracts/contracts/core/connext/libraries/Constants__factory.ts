/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  Constants,
  ConstantsInterface,
} from "../../../../../../../@connext/nxtp-contracts/contracts/core/connext/libraries/Constants";

const _abi = [
  {
    inputs: [],
    name: "AAVE_REFERRAL_CODE",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "A_PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BPS_FEE_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_COPY_BYTES",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_DEADLINE_EXTENSION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_NORMALIZED_DECIMALS",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTE_CALLDATA_RESERVE_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FEE_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FUTURE_TIME_BUFFER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GOVERNANCE_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INITIAL_AAVE_REFERRAL_CODE",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INITIAL_LIQUIDITY_FEE_NUMERATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INITIAL_MAX_ROUTERS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAXIMUM_POOLED_TOKENS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_A",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_ADMIN_FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_A_CHANGE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_LOOP_LIMIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_SWAP_FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_POOLED_TOKENS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_RAMP_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_RAMP_TIME",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ORACLE_VALID_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POOL_PRECISION_DECIMALS",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080806040523461001a576105679081610020823930815050f35b600080fdfe604060808152600436101561001357600080fd5b6000803560e01c9182630296ab501461041757826305a363de1461040c57826306e9481c146103d757826319b693e9146103a257826328c8d10e1461026257826330d356c4146101ed578263396984151461036d57826343bbce581461033a578263443841ef1461030757826351a7b98f146102d457826359f491c8146102a05782636037af421461026d57826360e26bb414610262578263834f3b701461022e578263ab3d8544146101f8578263ab5ac061146101ed578263b0b54895146101b8578263c86a23ee14610184578263c8d5d89e14610184578263d011f9181461014d5750508063d73792a914610144578063dab597ea1461013b578063f1828d56146101325763f3de03621461012a575b600080fd5b6101256104f7565b50610125610454565b5061012561041e565b506101256104f7565b817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610180576020905160648152f35b5080fd5b817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261018057602090516101008152f35b817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610180576020905162093a808152f35b5050506101256104c1565b817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261018057602090516305f5e1008152f35b817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610180576020905161270b8152f35b50505061012561048a565b817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610180576020905160108152f35b817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101805760209051610e108152f35b817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610180576020905160058152f35b817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101805760209051603c8152f35b817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610180576020905160038152f35b817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101805760209051620f42408152f35b817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101805760209051620151808152f35b817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101805760209051621275008152f35b505050610125610454565b5050506101255b5060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012557602060405160128152f35b5060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012557602060405160008152f35b5060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101255760206040516127108152f35b5060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012557602060405160028152f35b5060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101255760206040516402540be4008152f3fea2646970667358221220c36865b454ff339500db6f203e71041789016f041fb92624a4c3c224406f4d4c64736f6c63430008110033";

type ConstantsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConstantsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Constants__factory extends ContractFactory {
  constructor(...args: ConstantsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Constants> {
    return super.deploy(overrides || {}) as Promise<Constants>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Constants {
    return super.attach(address) as Constants;
  }
  override connect(signer: Signer): Constants__factory {
    return super.connect(signer) as Constants__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConstantsInterface {
    return new utils.Interface(_abi) as ConstantsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Constants {
    return new Contract(address, _abi, signerOrProvider) as Constants;
  }
}
