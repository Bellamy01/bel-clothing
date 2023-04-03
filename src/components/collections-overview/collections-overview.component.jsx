import React from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        { collections.map(({ id, ...otherSectionProps }) => (
            <CollectionPreview key={id} {...otherSectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);