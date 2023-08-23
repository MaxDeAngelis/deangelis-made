import { useRef, useEffect } from 'react';
import Resizer from 'react-image-file-resizer';

import { Canvas } from './Image.styles';
import ImageProps from './Image.types';

function Image({ src, readonly, onChange }: ImageProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !src || src?.indexOf('data:') === 0) return;
    const rect = {
      width: canvasRef.current.width,
      height: canvasRef.current.height,
    };
    const context = canvasRef?.current.getContext('2d');
    const image = new (window as any).Image();
    image.src = `${window.location.origin}/${src}`;
    image.onload = () =>
      context?.drawImage(image, 0, 0, rect.width, rect.height);
  }, [canvasRef, src]);

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!canvasRef.current) return;
    const uploadedFiles = e?.target?.files;
    const newImage = uploadedFiles?.item(0);
    if (newImage) {
      const context = canvasRef?.current?.getContext('2d');
      const rect = {
        width: canvasRef.current.width,
        height: canvasRef.current.height,
      };
      Resizer.imageFileResizer(newImage, 1000, 1000, 'png', 100, 0, (uri) => {
        const image = new (window as any).Image();
        image.onload = () =>
          context?.drawImage(image, 0, 0, rect.width, rect.height);
        image.src = uri;
        onChange('image', uri);
      });
    }
  };

  return (
    <>
      <Canvas ref={canvasRef} />
      {readonly || <input type='file' onChange={uploadImage} />}
    </>
  );
}
export default Image;
