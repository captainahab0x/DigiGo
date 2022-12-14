/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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
} from "../common";

export interface DigiGoWalletInterface extends utils.Interface {
  functions: {
    "isValidSignature(bytes32,bytes)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "thisIsTestAndShouldReturnValue()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "isValidSignature"
      | "supportsInterface"
      | "thisIsTestAndShouldReturnValue"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "thisIsTestAndShouldReturnValue",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "thisIsTestAndShouldReturnValue",
    data: BytesLike
  ): Result;

  events: {};
}

export interface DigiGoWallet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DigiGoWalletInterface;

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
    isValidSignature(
      _hash: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    thisIsTestAndShouldReturnValue(
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  isValidSignature(
    _hash: PromiseOrValue<BytesLike>,
    _signature: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  thisIsTestAndShouldReturnValue(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    isValidSignature(
      _hash: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    thisIsTestAndShouldReturnValue(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    isValidSignature(
      _hash: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    thisIsTestAndShouldReturnValue(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isValidSignature(
      _hash: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    thisIsTestAndShouldReturnValue(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
