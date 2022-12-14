/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace ICircuitValidator {
  export type CircuitQueryStruct = {
    schema: PromiseOrValue<BigNumberish>;
    slotIndex: PromiseOrValue<BigNumberish>;
    operator: PromiseOrValue<BigNumberish>;
    value: PromiseOrValue<BigNumberish>[];
    circuitId: PromiseOrValue<string>;
  };

  export type CircuitQueryStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber[],
    string
  ] & {
    schema: BigNumber;
    slotIndex: BigNumber;
    operator: BigNumber;
    value: BigNumber[];
    circuitId: string;
  };
}

export interface IZKPVerifierInterface extends utils.Interface {
  functions: {
    "getZKPRequest(uint64)": FunctionFragment;
    "setZKPRequest(uint64,address,(uint256,uint256,uint256,uint256[],string))": FunctionFragment;
    "submitZKPResponse(uint64,uint256[],uint256[2],uint256[2][2],uint256[2])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getZKPRequest"
      | "setZKPRequest"
      | "submitZKPResponse"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getZKPRequest",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setZKPRequest",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      ICircuitValidator.CircuitQueryStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "submitZKPResponse",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getZKPRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setZKPRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitZKPResponse",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IZKPVerifier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IZKPVerifierInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getZKPRequest(
      requestId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setZKPRequest(
      requestId: PromiseOrValue<BigNumberish>,
      validator: PromiseOrValue<string>,
      query: ICircuitValidator.CircuitQueryStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitZKPResponse(
      requestId: PromiseOrValue<BigNumberish>,
      inputs: PromiseOrValue<BigNumberish>[],
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getZKPRequest(
    requestId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setZKPRequest(
    requestId: PromiseOrValue<BigNumberish>,
    validator: PromiseOrValue<string>,
    query: ICircuitValidator.CircuitQueryStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitZKPResponse(
    requestId: PromiseOrValue<BigNumberish>,
    inputs: PromiseOrValue<BigNumberish>[],
    a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    b: [
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
    ],
    c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getZKPRequest(
      requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ICircuitValidator.CircuitQueryStructOutput>;

    setZKPRequest(
      requestId: PromiseOrValue<BigNumberish>,
      validator: PromiseOrValue<string>,
      query: ICircuitValidator.CircuitQueryStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;

    submitZKPResponse(
      requestId: PromiseOrValue<BigNumberish>,
      inputs: PromiseOrValue<BigNumberish>[],
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getZKPRequest(
      requestId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setZKPRequest(
      requestId: PromiseOrValue<BigNumberish>,
      validator: PromiseOrValue<string>,
      query: ICircuitValidator.CircuitQueryStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitZKPResponse(
      requestId: PromiseOrValue<BigNumberish>,
      inputs: PromiseOrValue<BigNumberish>[],
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getZKPRequest(
      requestId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setZKPRequest(
      requestId: PromiseOrValue<BigNumberish>,
      validator: PromiseOrValue<string>,
      query: ICircuitValidator.CircuitQueryStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitZKPResponse(
      requestId: PromiseOrValue<BigNumberish>,
      inputs: PromiseOrValue<BigNumberish>[],
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
