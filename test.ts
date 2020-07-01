import 'reflect-metadata'
import transformer from '@tsmirror/reflect/lib/transformer'
require("ts-node").register({
  transformers: (program: any) => {
    return {
      before: [transformer(program)]
    };
  }
});
import { graphql } from '@tsmirror/graphql/lib/grahpql'
import { gql, ApolloServer } from 'apollo-server';


interface Jedi {
  name: string | null,
  fullyTrained: boolean
}

const jediStore: Array<Jedi> = []

const resolvers = {
    Query: {
        jedis: (limit = 50): Jedi[] => jediStore.slice(0, limit),
        jediByName: (name: string): Jedi | undefined => jediStore.find((j: Jedi) => j.name === name)
    },
    Mutation: {
        doStuff: (i: number): boolean => jediStore.length > i,
        createJedi: (j: Jedi): Jedi => { jediStore.push(j); return j }
    }
}

const { schema } = graphql(resolvers)
// const typeDefs = gql(schema);
// new ApolloServer({ resolvers, typeDefs });
console.log(schema);

/*
input JediInput{
  master: JediInput
  name: String
  fullyTrained: Boolean
}
type Jedi{
  master: Jedi
  name: String
  fullyTrained: Boolean
}
type Mutation{
  createJedi(j: JediInput): Jedi
}
type Query{
  jedis(limit: Float = 50): [Jedi!]
}
schema{
  query: Query
  mutation: Mutation
}*/
