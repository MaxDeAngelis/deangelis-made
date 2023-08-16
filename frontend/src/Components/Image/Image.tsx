import { useRef } from 'react';

import { Canvas } from './Image.styles';

function Image(): JSX.Element {
  const imgCanvas = useRef(null);

  return (
    <>
      <Canvas ref={imgCanvas} />
      <input
        type='file'
        onChange={(e) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            const img = new (window as any).Image();
            img.onload = function () {
              imgCanvas.current.width = img.width;
              imgCanvas.current.height = img.height;
              imgCanvas.current.getContext('2d').drawImage(img, 0, 0);
            };
            console.log(event.target.result);
            img.src = event.target.result;
          };
          reader.readAsDataURL(e.target.files[0]);
        }}
      />
    </>
  );
}
export default Image;
