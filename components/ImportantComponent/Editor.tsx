import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


function Editor(): JSX.Element {
  const [content, setContent] = useState("");

  function handleEditorChange(event, editor) {
    const data = editor.getData();
    setContent(data);
  }

  return (
    <CKEditor editor={ClassicEditor} data={content} onChange={handleEditorChange} />
  );
}

export default Editor;
