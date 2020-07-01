import { graphql } from "@tsmirror/graphql/lib/grahpql";
import { GraphQLDate } from "graphql-iso-date";

interface Root {}
interface Context {}

interface Loan {
  loan_id: string;
}
interface LoanArgs {
  loan_id: number;
}
interface LoansArgs {
  customer_id: number;
}
interface ChangeDebitArgs {
  debit_id: number;
  loan_id: number;
  debit_amount: number;
  new_debit_amount: number;
  debit_date: number;
  new_debit_date: number;
  hold_days: number;
  payment_date: typeof GraphQLDate;
}

const resolvers = {
  Date: GraphQLDate,
  Query: {
    getLoan: (root: Root, args: LoanArgs, context: Context): Loan => {
      return {} as Loan;
    },
  },
  getLoans: (root: Root, args: LoansArgs, context: Context): Loan[] => {
    return [] as Loan[];
  },
  Mutation: {
    changeDebit: (root: Root, args: ChangeDebitArgs): string => {
      return "";
    },
  },
};

const { schema } = graphql(resolvers);
console.log(schema);
