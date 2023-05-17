import React from "react";
import { Outlet } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { convertCollectionSnapshotToMap, db } from "../../firebase/firebase.utils";

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = collection(db, 'collections');
        onSnapshot(collectionRef, (snapshot) => {
            convertCollectionSnapshotToMap(snapshot);
        });
    }
    render() {
        return (
            <div className="shop-page" >
                <Outlet />
            </div>
        )
    }
} 

export default ShopPage;