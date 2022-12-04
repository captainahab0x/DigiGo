/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  TypedMemView,
  TypedMemViewInterface,
} from "../../../../../../@connext/nxtp-contracts/contracts/shared/libraries/TypedMemView";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "actual",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
    ],
    name: "TypedMemView__assertType_typeAssertionFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "TypedMemView__assertValid_validityAssertionFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "TypedMemView__index_indexMoreThan32Bytes",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "loc",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "len",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slice",
        type: "uint256",
      },
    ],
    name: "TypedMemView__index_overrun",
    type: "error",
  },
  {
    inputs: [],
    name: "TypedMemView__unsafeCopyTo_identityOOG",
    type: "error",
  },
  {
    inputs: [],
    name: "TypedMemView__unsafeCopyTo_invalidPointer",
    type: "error",
  },
  {
    inputs: [],
    name: "TypedMemView__unsafeCopyTo_nullPointer",
    type: "error",
  },
  {
    inputs: [],
    name: "NULL",
    outputs: [
      {
        internalType: "bytes29",
        name: "",
        type: "bytes29",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608080604052346100195760b2908161001f823930815050f35b600080fdfe6080806040526004361015601257600080fd5b60003560e01c63f26be3fc14602657600080fd5b60007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112607757807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000060209252f35b600080fdfea2646970667358221220674d5aa7ac54e94da72069c649003386ffaaf238ede03a04a44dcde08e9b6f6f64736f6c63430008110033";

type TypedMemViewConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TypedMemViewConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TypedMemView__factory extends ContractFactory {
  constructor(...args: TypedMemViewConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TypedMemView> {
    return super.deploy(overrides || {}) as Promise<TypedMemView>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TypedMemView {
    return super.attach(address) as TypedMemView;
  }
  override connect(signer: Signer): TypedMemView__factory {
    return super.connect(signer) as TypedMemView__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TypedMemViewInterface {
    return new utils.Interface(_abi) as TypedMemViewInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TypedMemView {
    return new Contract(address, _abi, signerOrProvider) as TypedMemView;
  }
}