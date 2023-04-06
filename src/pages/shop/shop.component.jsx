import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../category/category.component";

const ShopPage = () => (
    <div className="shop-page">
    <Route element={<CollectionsOverview />} />
    <Route path={`${match.path}/:categoryId`} element={<CategoryPage />} />
    </div>
)

export default ShopPage;