# gql0

The minimal graphql client on earth.

## How to ?

```js
import create from 'gql0'


const url = 'https://my-awesome-api.com/graphql'
const headers = {
  Authorization: `Bearer ${token}`
}

const gql = create({ url, headers })

const query = gql`
{
  hello
}
`

const data = await query.call()
console.log(data)
```

## Don't use it

It's just some code to play with GraphQL, prefer a solution like [Relay](https://facebook.github.io/relay/) or [Apollo](https://www.apollographql.com/client/).
