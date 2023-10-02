/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesList {\n  categories {\n    ...CategoryItem\n  }\n}\n\nfragment CategoryItem on Category {\n  name\n  slug\n}": types.CategoriesListDocument,
    "query CollectionsList {\n  collections {\n    ...CollectionItem\n  }\n}\n\nfragment CollectionItem on Collection {\n  slug\n  name\n  image {\n    url\n  }\n}": types.CollectionsListDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query ProductVariantsGetById($id: ID!) {\n  product(where: {id: $id}) {\n    variants {\n      __typename\n      ... on ProductSizeColorVariant {\n        id\n        name\n        color\n        size\n      }\n      ... on ProductSizeVariant {\n        id\n        name\n        size\n      }\n      ... on ProductColorVariant {\n        id\n        name\n        color\n      }\n    }\n  }\n}": types.ProductVariantsGetByIdDocument,
    "query ProductsGetByCategorySlug($slug: String!, $take: Int, $skip: Int) {\n  categories(where: {slug: $slug}) {\n    products(first: $take, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}\n\nquery ProductsGetByCategoryCount($slug: String!) {\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetBySearchQuery($query: String!) {\n  products(where: {_search: $query}) {\n    ...ProductListItem\n  }\n}": types.ProductsGetBySearchQueryDocument,
    "query ProductsGetList($take: Int, $skip: Int) {\n  products(first: $take, skip: $skip) {\n    ...ProductListItem\n  }\n}\n\nquery ProductsGetCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetRelatedList($id: ID!) {\n  product(where: {id: $id}) {\n    categories(first: 1) {\n      products(first: 4) {\n        ...ProductListItem\n      }\n    }\n  }\n}": types.ProductsGetRelatedListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesList {\n  categories {\n    ...CategoryItem\n  }\n}\n\nfragment CategoryItem on Category {\n  name\n  slug\n}"): typeof import('./graphql').CategoriesListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsList {\n  collections {\n    ...CollectionItem\n  }\n}\n\nfragment CollectionItem on Collection {\n  slug\n  name\n  image {\n    url\n  }\n}"): typeof import('./graphql').CollectionsListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductVariantsGetById($id: ID!) {\n  product(where: {id: $id}) {\n    variants {\n      __typename\n      ... on ProductSizeColorVariant {\n        id\n        name\n        color\n        size\n      }\n      ... on ProductSizeVariant {\n        id\n        name\n        size\n      }\n      ... on ProductColorVariant {\n        id\n        name\n        color\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductVariantsGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!, $take: Int, $skip: Int) {\n  categories(where: {slug: $slug}) {\n    products(first: $take, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}\n\nquery ProductsGetByCategoryCount($slug: String!) {\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetBySearchQuery($query: String!) {\n  products(where: {_search: $query}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetBySearchQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int, $skip: Int) {\n  products(first: $take, skip: $skip) {\n    ...ProductListItem\n  }\n}\n\nquery ProductsGetCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetRelatedList($id: ID!) {\n  product(where: {id: $id}) {\n    categories(first: 1) {\n      products(first: 4) {\n        ...ProductListItem\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetRelatedListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
