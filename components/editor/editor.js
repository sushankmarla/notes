import React, { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Editor() {
    let [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []); // run on mounting

    if (loaded) {
        return (
            <Box sx={{color:'#333'}}>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {  // do something when editor's content changed
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                    }}
                />
            </Box>
        );
    }else{
        return <h2> Editor is loading </h2>;
    }
}

export default Editor;