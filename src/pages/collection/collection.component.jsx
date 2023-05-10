import React from "react";

import { useSelector, connect } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from '../../components/collection-item/collection-item.component';
import "./collection.styles.scss"
import { selectParamCollection } from "../../redux/shop/shop.selector";


const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    /* const { cId } = useParams();
    const { collections } = useSelector( state => state.shop)
    const collection = collections.find(col => col.routeName === cId);
    const { title, items } = collection;
 */
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => (<CollectionItem key={item.id} item={item} />))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { cId }  = useParams();
    return {
        collection: selectParamCollection(cId)(state)
    }
}

export default connect(mapStateToProps)(CollectionPage)