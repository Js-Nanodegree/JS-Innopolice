import gql from 'graphql-tag'

const Schema=gql`
enum ENUM_TYPE {
  ADMIN
  APPEAL
  GARAGE
  CLIENT
}

input MessageInput {
  workshop: [String]
  appealId: Int
  custom: String
}

type Query {
  channel(input: MessageInput): [Channel]
  appealChannel(input: MessageInput): [Channel]
  adminChannel(input: MessageInput): [Channel]
  garageChannel(input: [MessageInput]): [Channel]
}

input SharedMessageInput {
  uuid: String
  message: String
}

input iClient {
  first: String
  last: String
  middle: String
}

input nameClient {
  name: iClient
  id: Int
  uuid: String
  phone: String
}

input CreateChannel {
  appealId: Int
  workshop: [Int]
  members: [nameClient]
  uuid: String
  client: String
  idChannel: String
  workspaceType: ENUM_TYPE
  custom: String
}

input SendMessageInput {
  channel: String
  message: String
  sharedMessage: SharedMessageInput
  write: String
}

type Mutation {
  createChannel(input: CreateChannel): Channel
  sendMessage(idChannel: String): String
  deleteChannel(idChannel: String): String
}

type Channel {
  appealId: Int
  clientId: String
  idChannel: String!
  members: [UserClient]
  admin: Boolean
  workspaceType: ENUM_TYPE
  uuid: String
  createdAt: String
  read: Boolean
}

type Garage {
  id: Int
  name: String
  phone: String
  address: String
}

type UserClient {
  id: String
  name: NameClient
  phone: String
}

type NameClient {
  first: String
  last: String
  middle: String
}
`
export default Schema
