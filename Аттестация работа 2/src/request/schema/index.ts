import gql from 'graphql-tag'

export const GARAGES_ZENCAR=gql`
query(
  $where: WhereGarageInput
  $order: OrderGarageInput
  $paginate: PageInput
) {
  garages(where: $where, order: $order, paginate: $paginate) {
    items {
      id
      name
      address {
        state
        city
        street
        building
      }
      phone
      employees {
        id
        name {
          first
          last
          middle
        }
        phone
      }
    }
  }
}
`

export const CLIENT=gql`
query {
  profile {
    id
    name {
      first
      last
      middle
    }
    phone
    __typename
  }
}
`