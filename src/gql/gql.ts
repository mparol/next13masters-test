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
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    id\n    orderItems {\n      id\n      quantity\n      total\n      product {\n        ...ProductListItem\n      }\n    }\n  }\n}\n\nmutation CartCreate {\n  createOrder(data: {total: 0}) {\n    id\n  }\n}\n\nmutation CartAddItem($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}\n\nmutation CartRemoveItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}\n\nmutation CartChangeItemQuantity($quantity: Int!, $total: Int!, $itemId: ID!) {\n  updateOrderItem(\n    data: {quantity: $quantity, total: $total}\n    where: {id: $itemId}\n  ) {\n    quantity\n  }\n}": types.CartGetByIdDocument,
    "query CategoriesList {\n  categories {\n    ...CategoryItem\n  }\n}\n\nfragment CategoryItem on Category {\n  name\n  slug\n}": types.CategoriesListDocument,
    "query CollectionsList {\n  collections {\n    ...CollectionItem\n  }\n}\n\nfragment CollectionItem on Collection {\n  slug\n  name\n  image {\n    url\n  }\n}": types.CollectionsListDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query ProductVariantsGetById($id: ID!) {\n  product(where: {id: $id}) {\n    variants {\n      __typename\n      ... on ProductSizeColorVariant {\n        id\n        name\n        color\n        size\n      }\n      ... on ProductSizeVariant {\n        id\n        name\n        size\n      }\n      ... on ProductColorVariant {\n        id\n        name\n        color\n      }\n    }\n  }\n}": types.ProductVariantsGetByIdDocument,
    "query ProductsGetByCategorySlug($slug: String!, $take: Int, $skip: Int) {\n  categories(where: {slug: $slug}) {\n    products(first: $take, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}\n\nquery ProductsGetByCategoryCount($slug: String!) {\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetBySearchQuery($query: String!) {\n  products(where: {_search: $query}) {\n    ...ProductListItem\n  }\n}": types.ProductsGetBySearchQueryDocument,
    "query ProductsGetList($take: Int, $skip: Int, $sort: ProductOrderByInput) {\n  products(first: $take, skip: $skip, orderBy: $sort) {\n    ...ProductListItem\n  }\n}\n\nquery ProductsGetCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetRelatedList($id: ID!) {\n  product(where: {id: $id}) {\n    categories(first: 1) {\n      products(first: 4) {\n        ...ProductListItem\n      }\n    }\n  }\n}": types.ProductsGetRelatedListDocument,
    "mutation ReviewCreate($review: ReviewCreateInput!) {\n  createReview(data: $review) {\n    id\n  }\n}\n\nmutation ReviewPublish($id: ID!) {\n  publishReview(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}": types.ReviewCreateDocument,
    "query ReviewsGetByProductId($productId: ID!) {\n  reviews(where: {product: {id: $productId}}) {\n    ...Review\n  }\n}\n\nfragment Review on Review {\n  id\n  headline\n  name\n  email\n  content\n  rating\n}": types.ReviewsGetByProductIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    id\n    orderItems {\n      id\n      quantity\n      total\n      product {\n        ...ProductListItem\n      }\n    }\n  }\n}\n\nmutation CartCreate {\n  createOrder(data: {total: 0}) {\n    id\n  }\n}\n\nmutation CartAddItem($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}\n\nmutation CartRemoveItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}\n\nmutation CartChangeItemQuantity($quantity: Int!, $total: Int!, $itemId: ID!) {\n  updateOrderItem(\n    data: {quantity: $quantity, total: $total}\n    where: {id: $itemId}\n  ) {\n    quantity\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
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
export function graphql(source: "query ProductsGetList($take: Int, $skip: Int, $sort: ProductOrderByInput) {\n  products(first: $take, skip: $skip, orderBy: $sort) {\n    ...ProductListItem\n  }\n}\n\nquery ProductsGetCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetRelatedList($id: ID!) {\n  product(where: {id: $id}) {\n    categories(first: 1) {\n      products(first: 4) {\n        ...ProductListItem\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetRelatedListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($review: ReviewCreateInput!) {\n  createReview(data: $review) {\n    id\n  }\n}\n\nmutation ReviewPublish($id: ID!) {\n  publishReview(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewsGetByProductId($productId: ID!) {\n  reviews(where: {product: {id: $productId}}) {\n    ...Review\n  }\n}\n\nfragment Review on Review {\n  id\n  headline\n  name\n  email\n  content\n  rating\n}"): typeof import('./graphql').ReviewsGetByProductIdDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
