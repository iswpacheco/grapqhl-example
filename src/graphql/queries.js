import gql from 'graphql-tag'


export const CountryCases = gql`
    query getCountryCases {
        getCountryCases{
            continent

        }
    }
`