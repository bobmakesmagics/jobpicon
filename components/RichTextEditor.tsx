import React from 'react';
import useEditor from './useEditor';

interface RichTextEditorProps {
  data: string;
  onChange: (data: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ data, onChange }) => {
  const editor = useEditor();

  if (!editor) {
    return <div>Loading...</div>;
  }

  const { CKEditor, ClassicEditor } = editor;

  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      onChange={(event: any, editor: any) => {
        const newData = editor.getData();
        onChange(newData);
      }}
    />
  );
};

export default RichTextEditor;
