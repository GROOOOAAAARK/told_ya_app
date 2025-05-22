import { Abi } from "starknet"

export const abi: Abi = [
  {
    "type": "impl",
    "name": "ToldYaImpl",
    "interface_name": "told_ya::IToldYa"
  },
  {
    "type": "struct",
    "name": "told_ya::Event_",
    "members": [
      {
        "name": "identifier",
        "type": "core::felt252"
      },
      {
        "name": "name",
        "type": "core::felt252"
      },
      {
        "name": "predictions_deadline",
        "type": "core::felt252"
      },
      {
        "name": "event_datetime",
        "type": "core::felt252"
      },
      {
        "name": "type_",
        "type": "core::felt252"
      }
    ]
  },
  {
    "type": "struct",
    "name": "core::integer::u256",
    "members": [
      {
        "name": "low",
        "type": "core::integer::u128"
      },
      {
        "name": "high",
        "type": "core::integer::u128"
      }
    ]
  },
  {
    "type": "struct",
    "name": "told_ya::Prediction",
    "members": [
      {
        "name": "identifier",
        "type": "core::felt252"
      },
      {
        "name": "event_identifier",
        "type": "core::felt252"
      },
      {
        "name": "value",
        "type": "core::felt252"
      },
      {
        "name": "creator",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "buyingToken",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "buyingPrice",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "type": "interface",
    "name": "told_ya::IToldYa",
    "items": [
      {
        "type": "function",
        "name": "create_event",
        "inputs": [
          {
            "name": "name",
            "type": "core::felt252"
          },
          {
            "name": "predictions_deadline",
            "type": "core::felt252"
          },
          {
            "name": "event_datetime",
            "type": "core::felt252"
          },
          {
            "name": "type_",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "told_ya::Event_"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "create_prediction",
        "inputs": [
          {
            "name": "event_identifier",
            "type": "core::felt252"
          },
          {
            "name": "value",
            "type": "core::felt252"
          },
          {
            "name": "buyingToken",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "buyingPrice",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [
          {
            "type": "told_ya::Prediction"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_events",
        "inputs": [],
        "outputs": [
          {
            "type": "core::array::Array::<told_ya::Event_>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_predictions",
        "inputs": [],
        "outputs": [
          {
            "type": "core::array::Array::<told_ya::Prediction>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_user_predictions",
        "inputs": [
          {
            "name": "user",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<told_ya::Prediction>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "buy_prediction",
        "inputs": [
          {
            "name": "prediction_identifier",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "told_ya::Prediction"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_user_bought_predictions",
        "inputs": [
          {
            "name": "user_address",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<told_ya::Prediction>"
          }
        ],
        "state_mutability": "view"
      }
    ]
  },
  {
    "type": "impl",
    "name": "OwnableImpl",
    "interface_name": "openzeppelin_access::ownable::interface::IOwnable"
  },
  {
    "type": "interface",
    "name": "openzeppelin_access::ownable::interface::IOwnable",
    "items": [
      {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
          {
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "transfer_ownership",
        "inputs": [
          {
            "name": "new_owner",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "renounce_ownership",
        "inputs": [],
        "outputs": [],
        "state_mutability": "external"
      }
    ]
  },
  {
    "type": "constructor",
    "name": "constructor",
    "inputs": [
      {
        "name": "owner",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
    "kind": "struct",
    "members": [
      {
        "name": "previous_owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "new_owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
    "kind": "struct",
    "members": [
      {
        "name": "previous_owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "new_owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "OwnershipTransferred",
        "type": "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
        "kind": "nested"
      },
      {
        "name": "OwnershipTransferStarted",
        "type": "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
        "kind": "nested"
      }
    ]
  },
  {
    "type": "event",
    "name": "told_ya::ToldYa::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "OwnableEvent",
        "type": "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
        "kind": "nested"
      }
    ]
  }
]
