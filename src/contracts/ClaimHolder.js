module.exports = {
    "abi": [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getKeyPurpose",
            "outputs": [
                {
                    "name": "purpose",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getKey",
            "outputs": [
                {
                    "name": "purpose",
                    "type": "uint256"
                },
                {
                    "name": "keyType",
                    "type": "uint256"
                },
                {
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "name": "_purpose",
                    "type": "uint256"
                },
                {
                    "name": "_type",
                    "type": "uint256"
                }
            ],
            "name": "addKey",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_claimType",
                    "type": "uint256"
                }
            ],
            "name": "getClaimIdsByType",
            "outputs": [
                {
                    "name": "claimIds",
                    "type": "bytes32[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_claimId",
                    "type": "bytes32"
                }
            ],
            "name": "removeClaim",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "name": "_approve",
                    "type": "bool"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "removeKey",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_purpose",
                    "type": "uint256"
                }
            ],
            "name": "getKeysByPurpose",
            "outputs": [
                {
                    "name": "_keys",
                    "type": "bytes32[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_claimType",
                    "type": "uint256"
                },
                {
                    "name": "_scheme",
                    "type": "uint256"
                },
                {
                    "name": "_issuer",
                    "type": "address"
                },
                {
                    "name": "_signature",
                    "type": "bytes"
                },
                {
                    "name": "_data",
                    "type": "bytes"
                },
                {
                    "name": "_uri",
                    "type": "string"
                }
            ],
            "name": "addClaim",
            "outputs": [
                {
                    "name": "claimRequestId",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "name": "_data",
                    "type": "bytes"
                }
            ],
            "name": "execute",
            "outputs": [
                {
                    "name": "executionId",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_claimId",
                    "type": "bytes32"
                }
            ],
            "name": "getClaim",
            "outputs": [
                {
                    "name": "claimType",
                    "type": "uint256"
                },
                {
                    "name": "scheme",
                    "type": "uint256"
                },
                {
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "name": "signature",
                    "type": "bytes"
                },
                {
                    "name": "data",
                    "type": "bytes"
                },
                {
                    "name": "uri",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "name": "_purpose",
                    "type": "uint256"
                }
            ],
            "name": "keyHasPurpose",
            "outputs": [
                {
                    "name": "result",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "claimRequestId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "claimType",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "scheme",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "signature",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "data",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "ClaimRequested",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "claimId",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "name": "claimType",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "signatureType",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "signature",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "name": "claim",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "ClaimAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "claimId",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "name": "claimType",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "scheme",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "signature",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "data",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "ClaimAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "claimId",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "name": "claimType",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "scheme",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "signature",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "data",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "ClaimRemoved",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "claimId",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "name": "claimType",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "scheme",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "signature",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "data",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "ClaimChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "executionId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "ExecutionFailed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "name": "purpose",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "keyType",
                    "type": "uint256"
                }
            ],
            "name": "KeyAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "name": "purpose",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "keyType",
                    "type": "uint256"
                }
            ],
            "name": "KeyRemoved",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "executionId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "ExecutionRequested",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "executionId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "Executed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "executionId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "Approved",
            "type": "event"
        }
    ],
    "data": "6080604052600033604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140191505060405180910390209050806001600083600019166000191681526020019081526020016000206002018160001916905550600180600083600019166000191681526020019081526020016000206000018190555060018060008360001916600019168152602001908152602001600020600101819055506002600060018152602001908152602001600020819080600181540180825580915050906001820390600052602060002001600090919290919091509060001916905550600180600083600019166000191681526020019081526020016000206000015482600019167f480000bb1edad8ca1470381cc334b1917fbd51c6531f3a623ea8e0ec7e38a6e960405160405180910390a4506123eb8061016b6000396000f3006080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063032c1a8a146100bf57806312aaac70146101045780631d3812401461015f578063262b54f5146101bc5780634eee424a1461023e578063747442d314610287578063862642f5146102d85780639010f72614610321578063b1a34e0d146103a3578063b61d27f6146104e8578063c9100bcb1461058f578063d202158d14610752575b600080fd5b3480156100cb57600080fd5b506100ee60048036038101908080356000191690602001909291905050506107a5565b6040518082815260200191505060405180910390f35b34801561011057600080fd5b5061013360048036038101908080356000191690602001909291905050506107cd565b604051808481526020018381526020018260001916600019168152602001935050505060405180910390f35b34801561016b57600080fd5b506101a26004803603810190808035600019169060200190929190803590602001909291908035906020019092919050505061083c565b604051808215151515815260200191505060405180910390f35b3480156101c857600080fd5b506101e760048036038101908080359060200190929190505050610af5565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561022a57808201518184015260208101905061020f565b505050509050019250505060405180910390f35b34801561024a57600080fd5b5061026d6004803603810190808035600019169060200190929190505050610b64565b604051808215151515815260200191505060405180910390f35b34801561029357600080fd5b506102be60048036038101908080359060200190929190803515159060200190929190505050610fe2565b604051808215151515815260200191505060405180910390f35b3480156102e457600080fd5b5061030760048036038101908080356000191690602001909291905050506114f6565b604051808215151515815260200191505060405180910390f35b34801561032d57600080fd5b5061034c60048036038101908080359060200190929190505050611661565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561038f578082015181840152602081019050610374565b505050509050019250505060405180910390f35b3480156103af57600080fd5b506104ca6004803603810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506116d0565b60405180826000191660001916815260200191505060405180910390f35b3480156104f457600080fd5b50610579600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611bf5565b6040518082815260200191505060405180910390f35b34801561059b57600080fd5b506105be6004803603810190808035600019169060200190929190505050611ed7565b604051808781526020018681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019080838360005b83811015610644578082015181840152602081019050610629565b50505050905090810190601f1680156106715780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b838110156106aa57808201518184015260208101905061068f565b50505050905090810190601f1680156106d75780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b838110156107105780820151818401526020810190506106f5565b50505050905090810190601f16801561073d5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b34801561075e57600080fd5b5061078b6004803603810190808035600019169060200190929190803590602001909291905050506121a1565b604051808215151515815260200191505060405180910390f35b6000600160008360001916600019168152602001908152602001600020600001549050919050565b60008060006001600085600019166000191681526020019081526020016000206000015460016000866000191660001916815260200190815260200160002060010154600160008760001916600019168152602001908152602001600020600201549250925092509193909250565b600083600019166001600086600019166000191681526020019081526020016000206002015460001916141515156108dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f4b657920616c726561647920657869737473000000000000000000000000000081525060200191505060405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a075761096c33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401915050604051809103902060016121a1565b1515610a06576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001807f53656e64657220646f6573206e6f742068617665206d616e6167656d656e742081526020017f6b6579000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b5b8360016000866000191660001916815260200190815260200160002060020181600019169055508260016000866000191660001916815260200190815260200160002060000181905550816001600086600019166000191681526020019081526020016000206001018190555060026000848152602001908152602001600020849080600181540180825580915050906001820390600052602060002001600090919290919091509060001916905550818385600019167f480000bb1edad8ca1470381cc334b1917fbd51c6531f3a623ea8e0ec7e38a6e960405160405180910390a4600190509392505050565b606060056000838152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610b5857602002820191906000526020600020905b81546000191681526020019060010190808311610b40575b50505050509050919050565b60003073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c9157610bf633604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401915050604051809103902060016121a1565b1515610c90576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001807f53656e64657220646f6573206e6f742068617665206d616e6167656d656e742081526020017f6b6579000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b5b60046000836000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166004600084600019166000191681526020019081526020016000206000015483600019167f3cf57863a89432c61c4a27073c6ee39e8a764bff5a05aebfbcdcdc80b2e6130a60046000876000191660001916815260200190815260200160002060010154600460008860001916600019168152602001908152602001600020600301600460008960001916600019168152602001908152602001600020600401600460008a6000191660001916815260200190815260200160002060050160405180858152602001806020018060200180602001848103845287818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015610e3b5780601f10610e1057610100808354040283529160200191610e3b565b820191906000526020600020905b815481529060010190602001808311610e1e57829003601f168201915b5050848103835286818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015610ebe5780601f10610e9357610100808354040283529160200191610ebe565b820191906000526020600020905b815481529060010190602001808311610ea157829003601f168201915b5050848103825285818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015610f415780601f10610f1657610100808354040283529160200191610f41565b820191906000526020600020905b815481529060010190602001808311610f2457829003601f168201915b505097505050505050505060405180910390a460046000836000191660001916815260200190815260200160002060008082016000905560018201600090556002820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600382016000610fb7919061220a565b600482016000610fc7919061220a565b600582016000610fd79190612252565b505060019050919050565b600061103f33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401915050604051809103902060026121a1565b15156110b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f53656e64657220646f6573206e6f74206861766520616374696f6e206b65790081525060200191505060405180910390fd5b827fb3932da477fe5d6c8ff2eafef050c0f3a1af18fc07121001482600f36f3715d883604051808215151515815260200191505060405180910390a26001151582151514156114bc5760016003600085815260200190815260200160002060030160006101000a81548160ff0219169083151502179055506003600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660036000858152602001908152602001600020600201600060405180838054600181600116156101000203166002900480156111f55780601f106111ca576101008083540402835291602001916111f5565b820191906000526020600020905b8154815290600101906020018083116111d857829003601f168201915b50508260ff168152602001925050506000604051808303816000865af1915050905080156113845760016003600085815260200190815260200160002060030160016101000a81548160ff02191690831515021790555060036000848152602001908152602001600020600101546003600085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16847f1f920dbda597d7bf95035464170fa58d0a4b57f13a1c315ace6793b9f63688b86003600088815260200190815260200160002060020160405180806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156113715780601f1061134657610100808354040283529160200191611371565b820191906000526020600020905b81548152906001019060200180831161135457829003601f168201915b50509250505060405180910390a46114f0565b60036000848152602001908152602001600020600101546003600085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16847fe10c49d9f7c71da23262367013434763cfdb2332267641728d25cd712c5c6a686003600088815260200190815260200160002060020160405180806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156114a95780601f1061147e576101008083540402835291602001916114a9565b820191906000526020600020905b81548152906001019060200180831161148c57829003601f168201915b50509250505060405180910390a46114f0565b60006003600085815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600190505b92915050565b600081600019166001600084600019166000191681526020019081526020016000206002015460001916141515611595576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f4e6f2073756368206b657900000000000000000000000000000000000000000081525060200191505060405180910390fd5b600160008360001916600019168152602001908152602001600020600101546001600084600019166000191681526020019081526020016000206000015460016000856000191660001916815260200190815260200160002060020154600019167f585a4aef50f8267a92b32412b331b20f7f8b96f2245b253b9cc50dcc621d339760405160405180910390a460016000836000191660001916815260200190815260200160002060008082016000905560018201600090556002820160009055505060019050919050565b6060600260008381526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156116c457602002820191906000526020600020905b815460001916815260200190600101908083116116ac575b50505050509050919050565b6000808588604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140182815260200192505050604051809103902090503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611859576117be33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401915050604051809103902060036121a1565b1515611858576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001807f53656e64657220646f6573206e6f74206861766520636c61696d207369676e6581526020017f72206b657900000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b5b8573ffffffffffffffffffffffffffffffffffffffff1660046000836000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561191057600560008981526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915090600019169055505b876004600083600019166000191681526020019081526020016000206000018190555086600460008360001916600019168152602001908152602001600020600101819055508560046000836000191660001916815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508460046000836000191660001916815260200190815260200160002060030190805190602001906119e592919061229a565b50836004600083600019166000191681526020019081526020016000206004019080519060200190611a1892919061229a565b50826004600083600019166000191681526020019081526020016000206005019080519060200190611a4b92919061231a565b508573ffffffffffffffffffffffffffffffffffffffff168882600019167f46149b18aa084502c3f12bc75e19eda8bda8d102b82cce8474677a6d0d5f43c58a89898960405180858152602001806020018060200180602001848103845287818151815260200191508051906020019080838360005b83811015611adc578082015181840152602081019050611ac1565b50505050905090810190601f168015611b095780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b83811015611b42578082015181840152602081019050611b27565b50505050905090810190601f168015611b6f5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015611ba8578082015181840152602081019050611b8d565b50505050905090810190601f168015611bd55780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390a4809150509695505050505050565b6000600360008054815260200190815260200160002060030160019054906101000a900460ff16151515611c91576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f416c72656164792065786563757465640000000000000000000000000000000081525060200191505060405180910390fd5b83600360008054815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826003600080548152602001908152602001600020600101819055508160036000805481526020019081526020016000206002019080519060200190611d2e92919061229a565b50828473ffffffffffffffffffffffffffffffffffffffff166000547f8afcfabcb00e47a53a8fc3e9f23ff47ee1926194bb1350dd007c50b412a6cee8856040518080602001828103825283818151815260200191508051906020019080838360005b83811015611dac578082015181840152602081019050611d91565b50505050905090810190601f168015611dd95780820380516001836020036101000a031916815260200191505b509250505060405180910390a4611e4133604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401915050604051809103902060016121a1565b80611ea35750611ea233604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401915050604051809103902060026121a1565b5b15611eb757611eb56000546001610fe2565b505b600080815480929190600101919050555060016000540390509392505050565b600080600060608060606004600088600019166000191681526020019081526020016000206000015460046000896000191660001916815260200190815260200160002060010154600460008a6000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600460008b60001916600019168152602001908152602001600020600301600460008c60001916600019168152602001908152602001600020600401600460008d60001916600019168152602001908152602001600020600501828054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561204d5780601f106120225761010080835404028352916020019161204d565b820191906000526020600020905b81548152906001019060200180831161203057829003601f168201915b50505050509250818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156120e95780601f106120be576101008083540402835291602001916120e9565b820191906000526020600020905b8154815290600101906020018083116120cc57829003601f168201915b50505050509150808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156121855780601f1061215a57610100808354040283529160200191612185565b820191906000526020600020905b81548152906001019060200180831161216857829003601f168201915b5050505050905095509550955095509550955091939550919395565b6000806000600102600160008660001916600019168152602001908152602001600020600201546000191614156121db5760009150612203565b8260016000866000191660001916815260200190815260200160002060000154111590508091505b5092915050565b50805460018160011615610100020316600290046000825580601f10612230575061224f565b601f01602090049060005260206000209081019061224e919061239a565b5b50565b50805460018160011615610100020316600290046000825580601f106122785750612297565b601f016020900490600052602060002090810190612296919061239a565b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106122db57805160ff1916838001178555612309565b82800160010185558215612309579182015b828111156123085782518255916020019190600101906122ed565b5b509050612316919061239a565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061235b57805160ff1916838001178555612389565b82800160010185558215612389579182015b8281111561238857825182559160200191906001019061236d565b5b509050612396919061239a565b5090565b6123bc91905b808211156123b85760008160009055506001016123a0565b5090565b905600a165627a7a723058201127c00ca7c98072713b5f10674cd54098829348e654067d44305cba7ff27ccb0029"
}