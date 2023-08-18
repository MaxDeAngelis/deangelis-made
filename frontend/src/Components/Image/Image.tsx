import { useRef, useEffect } from 'react';

import { Canvas } from './Image.styles';
import ImageProps from './Image.types';

function Image({ src }: ImageProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log('effect');
    if (!canvasRef.current || !src) return;
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
    const reader = new FileReader();
    reader.onload = (event: Event) => {
      const img = new (window as any).Image();
      const context = canvasRef?.current.getContext('2d');
      img.onload = () => context.drawImage(img, 0, 0);
      img.src = event?.target?.result;
    };
    reader.readAsDataURL(e?.target?.files[0]);
  };

  return (
    <>
      <Canvas ref={canvasRef} />
      <input type='file' onChange={uploadImage} />
    </>
  );
}
export default Image;
