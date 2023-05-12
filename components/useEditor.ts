import { useEffect, useState } from 'react';

const useEditor = () => {
  const [editor, setEditor] = useState<any>(null);

  useEffect(() => {
    const loadEditor = async () => {
      const editorModule = await import('@ckeditor/ckeditor5-build-classic');
      const reactModule = await import('@ckeditor/ckeditor5-react');

      setEditor({
        ClassicEditor: editorModule.default,
        CKEditor: reactModule.CKEditor,
      });
    };

    loadEditor();
  }, []);

  return editor;
};

export default useEditor;
