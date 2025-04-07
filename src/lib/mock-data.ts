import type { Event, Prediction } from "./types"

export const mockEvents: Event[] = [
  {
    id: "event-001",
    title: "Bitcoin will reach $100k by EOY",
    deadline: "2024-12-31T23:59:59Z",
    predictions: 1243,
  },
  {
    id: "event-002",
    title: "Ethereum 2.0 will launch in Q3",
    deadline: "2024-09-30T23:59:59Z",
    predictions: 876,
  },
  {
    id: "event-003",
    title: "Starknet TVL will exceed $5B",
    deadline: "2024-08-15T23:59:59Z",
    predictions: 542,
  },
  {
    id: "event-004",
    title: "Apple will announce AR glasses",
    deadline: "2024-10-10T23:59:59Z",
    predictions: 321,
  },
  {
    id: "event-005",
    title: "Tesla will accept crypto payments",
    deadline: "2024-11-20T23:59:59Z",
    predictions: 654,
  },
  {
    id: "event-006",
    title: "Web3 gaming will have 1M daily users",
    deadline: "2024-12-15T23:59:59Z",
    predictions: 432,
  },
]

export const mockPredictions: Prediction[] = [
  {
    username: "0x04a9e399c274bb6c4f4c26d7b0c5d2e03a0e3aea42c8583e869e3598f4df7b8f",
    event_id: "event-001",
    sells: 42,
  },
  {
    username: "0x05d1e6c8c0d6e3c8e0f0d7e2c8e0f0d7e2c8e0f0d7e2c8e0f0d7e2c8e0f0d7e2",
    event_id: "event-002",
    sells: 28,
  },
  {
    username: "0x06f1e6c8c0d6e3c8e0f0d7e2c8e0f0d7e2c8e0f0d7e2c8e0f0d7e2c8e0f0d7e2",
    event_id: "event-003",
    sells: 15,
  },
  {
    username: "0x07a1e6c8c0d6e3c8e0f0d7e2c8e0f0d7e2c8e0f0d7e2c8e0f0d7e2c8e0f0d7e2",
    event_id: "event-004",
    sells: 36,
  },
  {
    username: "0x08b1e6c8c0d6e3c8e0f0d7e2c8e0f0d7e2c8e0f0d7e2c8e0f0d7e2c8e0f0d7e2",
    event_id: "event-005",
    sells: 19,
  },
  {
    username: "0x09c1e6c8c0d6e3c8e0f0d7e2c8e0f0d7e2c8e0f0d7e2c8e0f0d7e2c8e0f0d7e2",
    event_id: "event-006",
    sells: 24,
  },
]
