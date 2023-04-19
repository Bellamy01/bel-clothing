import React from "react";

import "./collection.styles.scss"
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import { useParams } from "react-router-dom";

const CollectionPage = ({ collection }) => {
    console.log(collection);
    return (
        <div className="collection-page">
            COLLECTION PAGE
        </div>
    )
}

const mapStateToProps = (state) => {
    const { cId } = useParams();
    return {
        collection: selectCollection(cId)(state)
    }
}

export default connect(mapStateToProps)(CollectionPage)