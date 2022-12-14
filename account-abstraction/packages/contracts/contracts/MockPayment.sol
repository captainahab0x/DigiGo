//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract MockPayment {
  uint256 deposit;

  function pay() public payable {
    deposit = deposit + msg.value;
  }
}
