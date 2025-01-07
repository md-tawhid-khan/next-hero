import React from 'react';

const CategoriesDetailsPage = ({params}) => {

    if (!params?.features) {
        return <p>Loading...</p>;
    }

    if(params?.features?.length==2)
        return(
    <div>{params?.features[1]}</div>
)

if(params?.features?.length==3)
    return(
<div>{params?.features[2]}</div>
)
    return (
        <div>
            <h1>categories details page</h1>
        </div>
    );
};

export default CategoriesDetailsPage;