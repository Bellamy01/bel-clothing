import { createSelector } from "reselect"

export const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionIdParam => createSelector(
    [selectCollections],
    collections => collections[collectionIdParam]
)
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectParamCollection = collectionIdParam => createSelector(
    [selectCollections],
    collections => collections.find(col => col.routeName === collectionIdParam)
)