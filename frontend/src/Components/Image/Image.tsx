import { useState } from 'react';

import Cropper, { Area } from 'react-easy-crop';
import Label from '../Label';
import ImageProps from './Image.types';
import { CropperContainer, Toolbar, Img } from './Image.styles';
import { readFile, getCroppedImg } from './Image.utils';

function Image({ readonly, src, onChange }: ImageProps): JSX.Element {
  const [imageSrc, setImageSrc] = useState<string | undefined>(src);
  const [open, setOpen] = useState<boolean>(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageDataUrl = await readFile(file);
      setOpen(true);
      setImageSrc(imageDataUrl);
    }
  };

  return (
    <Label htmlFor='image'>
      Image
      {open ? (
        <>
          <Toolbar>
            <Label htmlFor='zoom'>
              Zoom
              <input
                type='range'
                name='zoom'
                min='0'
                max='3'
                step='0.1'
                value={zoom}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setZoom(e.target.value as unknown as number)
                }
              />
            </Label>
            <Label htmlFor='rotation'>
              Rotation
              <input
                type='range'
                name='rotation'
                min='0'
                max='360'
                step='45'
                value={rotation}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setRotation(e.target.value as unknown as number)
                }
              />
            </Label>
            <button
              type='button'
              onClick={() =>
                getCroppedImg(
                  imageSrc as string,
                  croppedAreaPixels,
                  rotation,
                ).then((img) => {
                  if (onChange) onChange('image', img);
                  setOpen(false);
                })
              }
            >
              Save Image
            </button>
          </Toolbar>
          <CropperContainer>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              rotation={rotation}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={(_, croppedPixels) =>
                setCroppedAreaPixels(croppedPixels)
              }
              onRotationChange={setRotation}
              onZoomChange={setZoom}
            />
          </CropperContainer>
        </>
      ) : (
        <Img
          src={src?.indexOf('data:') === 0 ? `${src}` : `/${src}`}
          alt='img'
        />
      )}
      {!readonly && (
        <input
          type='file'
          name='image'
          onChange={onFileChange}
          accept='image/*'
        />
      )}
    </Label>
  );
}
export default Image;
