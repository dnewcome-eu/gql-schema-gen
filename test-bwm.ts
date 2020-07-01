import { graphql } from "@tsmirror/graphql/lib/grahpql";

interface Loan {
  loan_id: string;
}

const getLoans = (
  args: object,
  { dataSources, acl }: { dataSources: { getLoans: Function }; acl: object }
) => {
  return dataSources.getLoans(args);
};

export const resolvers = {
  Query: {
    loansBwm: getLoans,
  },
  Mutation: {
    loanMutation: () => {},
  },
};

const { schema } = graphql(resolvers);
console.log(schema);
