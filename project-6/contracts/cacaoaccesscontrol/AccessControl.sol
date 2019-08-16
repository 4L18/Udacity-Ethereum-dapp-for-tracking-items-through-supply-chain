pragma solidity ^0.4.24;

import './FarmerRole.sol';
import './DistributorRole.sol';
import './RetailerRole.sol';
import './ConsumerRole.sol';

contract AccessControl is FarmerRole, DistributorRole, RetailerRole, ConsumerRole {
    
    constructor() public {
        
    }
    
}