import React, { useEffect } from 'react';
// import {docs} from "@googleapis/docs";
import {Box} from "@mui/material";

function Page() {
    useEffect(() => {
        const docs = docs({ version: 'v1', auth });
        const printDocTitle = async () => {
            const documentId = '1xrqve90hloOYGR3RSCvwXJBXq_NQR5kmNfrxKYSveKk';
            const doc = await docs.documents.get({ documentId });
            console.log(`The title of the document is: ${doc.data.title}`);
        };
        printDocTitle();
    }, []); // Empty array means this effect runs once on component mount

    return (
        <Box>
            <h1>Resume</h1>
        </Box>
    );
}
export {Page as ResumePage}