import React, { useCallback} from 'react'
import Quill from 'quill'
import "quill/dist/quill.snow.css"
import './css/ec_typing.css';



const TextEditor = () => {
  // Create a ref using the useRef hook to store a reference to the wrapper div.
  const wrapperRef = useCallback((wrapper)=>{
    if(wrapper==null) return
      wrapper.innerHTML = ''
      const editor = document.createElement('div');
      wrapper.append(editor)
      new Quill(editor, { theme: 'snow' });

  },[]);

  // Use the useEffect hook to initialize and clean up the Quill instance.
  // useEffect(() => {
  //   // Create a new `div` element that will be used as the container for the Quill editor.
  //   const editor = document.createElement('div');

  //   // Append the editor div as a child to the wrapper div using the ref.
  //   wrapperRef.current.append(editor);

  //   // Initialize Quill by passing the editor div as the container and specifying the theme as 'snow'.
  //   new Quill(editor, { theme: 'snow' });

  //   // The `useEffect` cleanup function will run when the component is unmounted.
  //   // It clears the content of the wrapper div to remove the Quill editor.
  //   return () => {
  //     wrapperRef.current.innerHTML = '';
  //   };
  // }, []); // The empty dependency array ensures the effect runs only once after the initial render.

  // Render the wrapper div that will hold the Quill editor.
  return (
    <div id='container' ref={wrapperRef}></div>
  );
};

export default TextEditor;
