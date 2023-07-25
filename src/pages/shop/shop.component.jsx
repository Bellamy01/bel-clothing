import React from "react";
import { Outlet } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { convertCollectionSnapshotToMap, db } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = collection(db, 'collections');
        this.unsubscribeFromSnapshot = onSnapshot(collectionRef,async (snapshot) => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            console.log(collectionsMap);
            updateCollections(collectionsMap);
        });
    }
    render() {
        return (
            <div className="shop-page" >
                <Outlet/>
            </div>
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);