import MarketingSplash from "./MarketingSplash";
import WhatIDo from "./WhatIDo";
import React from "react";

function Page() {
    return (
        <React.Fragment>
            <MarketingSplash/>
            <WhatIDo/>
        </React.Fragment>
    );
}

export {Page as MarketingPage};