import { LoadingStyled } from './index.styles';

import React from 'react';

const WrappedLoading = () => {
    return (
        <LoadingStyled>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </LoadingStyled>
    );
};

export const Loading = React.memo(WrappedLoading);
