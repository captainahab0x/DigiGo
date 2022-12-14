/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DigiGoWallet,
  DigiGoWalletInterface,
} from "../../contracts/DigiGoWallet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "singleton",
        type: "address",
      },
      {
        internalType: "contract EIP4337Manager",
        name: "aaModule",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "thisIsTestAndShouldReturnValue",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604090808252346102745760608161074580380380916100218285610279565b83398101031261027457610034816102b2565b6020828101516001600160a01b038082169492939290918590036102745761005e868392016102b2565b921693841561022557600080546001600160a01b03191686178155865163aba3c0b560e01b86820190815260248201979097526044808201849052949093166064808501919091528352946001600160401b039260a08101848111828210176102115788525186928392905af43d15610208573d9182116101f4578551916100ef601f8201601f1916860184610279565b82523d858584013e5b1561019f5750506001918254918383811c93168015610195575b8184101461018157601f8311610157575b50507f74686973497354657374416e6453686f756c6452657475726e56616c7565003c909155505161047e90816102c78239f35b601f84918284528320930160051c8301925b8381106101765750610123565b828155018390610169565b634e487b7160e01b82526022600452602482fd5b92607f1692610112565b9092935193849262461bcd60e51b8452806004850152825192836024860152825b8481106101de57505050828201840152601f01601f19168101030190fd5b81810183015188820188015287955082016101c0565b634e487b7160e01b85526041600452602485fd5b606091506100f8565b634e487b7160e01b88526041600452602488fd5b855162461bcd60e51b815260048101859052602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b601f909101601f19168101906001600160401b0382119082101761029c57604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036102745756fe60806040526004361015610018575b6100166103e0565b005b6000803560e01c90816301ffc9a714610057575080631626ba7e1461004e576320a8e5b10361000e57610049610283565b61000e565b50610049610119565b346101165760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011657600435907fffffffff00000000000000000000000000000000000000000000000000000000821680920361011657507f1626ba7e0000000000000000000000000000000000000000000000000000000081149081156100ec575b50151560805260206080f35b7f01ffc9a700000000000000000000000000000000000000000000000000000000915014816100e0565b80fd5b50346101a85760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a85760243567ffffffffffffffff8082116101a857366023830112156101a85781600401359081116101a857369101602401116101a85760206040517f1626ba7e000000000000000000000000000000000000000000000000000000008152f35b600080fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176101ee57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60208082528251818301819052939260005b85811061026f575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006040809697860101520116010190565b81810183015184820160400152820161022f565b50346101a8576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610116576040519080600190815480831c928082169283156103d6575b60209283861085146103a957858852602088019490811561036a5750600114610311575b61030d87610301818903826101ad565b6040519182918261021d565b0390f35b600160005294509192917fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b83861061035957505050910190506103018261030d38806102f1565b80548587015294820194810161033d565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685525050505090151560051b0190506103018261030d38806102f1565b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526022600452fd5b93607f16936102cd565b50600073ffffffffffffffffffffffffffffffffffffffff815416907fa619486e0000000000000000000000000000000000000000000000000000000081351461044157808092368280378136915af43d82803e1561043d573d90f35b3d90fd5b6020918152f3fea2646970667358221220198a8fa9b863bc1db45f564e148054e299fb68281ab28b4549463b0f3c0713f064736f6c63430008110033";

type DigiGoWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DigiGoWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DigiGoWallet__factory extends ContractFactory {
  constructor(...args: DigiGoWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    singleton: PromiseOrValue<string>,
    aaModule: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DigiGoWallet> {
    return super.deploy(
      singleton,
      aaModule,
      owner,
      overrides || {}
    ) as Promise<DigiGoWallet>;
  }
  override getDeployTransaction(
    singleton: PromiseOrValue<string>,
    aaModule: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      singleton,
      aaModule,
      owner,
      overrides || {}
    );
  }
  override attach(address: string): DigiGoWallet {
    return super.attach(address) as DigiGoWallet;
  }
  override connect(signer: Signer): DigiGoWallet__factory {
    return super.connect(signer) as DigiGoWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DigiGoWalletInterface {
    return new utils.Interface(_abi) as DigiGoWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DigiGoWallet {
    return new Contract(address, _abi, signerOrProvider) as DigiGoWallet;
  }
}
