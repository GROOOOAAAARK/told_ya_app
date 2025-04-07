export interface Event {
    id: string
    title: string
    deadline: string
    predictions: number
  }
  
  export interface Prediction {
    username: string // Starknet wallet address
    event_id: string
    sells: number
  }
  