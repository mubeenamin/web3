//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

contract Token{
    string public name ="Dao Token";
    string public symbol = "DT";
    uint256 public totalSupply = 1000;

    address public owner;
    mapping(address=>uint256) balances;
    constructor(){
        balances[msg.sender]=totalSupply;
        owner=msg.sender;
    }
    function transfer(address to, uint256 amount) external{
        require(balances[msg.sender]>=amount,"Not enough token");
        balances[msg.sender]-=amount;
        balances[to]+=amount;
    }
    function balanceOf(address account) external view returns(uint){
        return balances[account];
    }
}