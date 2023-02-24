import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TiptapWrapper } from "./styled";

type TiptapType = {
  width?: number | string;
  height?: number | string;
};

const Tiptap: React.FC<TiptapType> = (props) => {
  const { width = 500, height = 250 } = props;

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    autofocus: true,
  });

  const handleBtnClick = () => {
    const text = editor?.getJSON();
    console.log(text);
  };

  return (
    <TiptapWrapper>
      <h2>TipTap</h2>
      <div
        className="tiptap-box"
        style={{ width, height, border: "1px solid #ccc", overflow: "auto" }}
      >
        <EditorContent editor={editor} />
      </div>
      <button onClick={handleBtnClick}>确认</button>
    </TiptapWrapper>
  );
};

export default Tiptap;
