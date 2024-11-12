import React, { useRef } from 'react';
import { Icons } from '@/components/icons/icons';
import { Controller, Control } from 'react-hook-form';

type ImagePickerProps = {
  control: Control<any>;
  name: string;
};

const ImagePicker: React.FC<ImagePickerProps> = ({ control, name }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div className="border border-gray-200 w-36 h-36 p-1 flex items-center justify-center">
          {!value && (
            <Icons.fileImage
              onClick={handleIconClick}
              className="cursor-pointer w-24 h-24 rounded-full"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const file = event.target.files?.[0];
              if (file) {
                console.log(file);
                onChange(file);
              }
            }}
            ref={fileInputRef}
            className="hidden"
          />
          {value && (
            <img
              onClick={handleIconClick}
              src={typeof value === 'string' ? value : URL.createObjectURL(value)}
              alt="Preview"
            />
          )}
        </div>
      )}
    />
  );
};

export default ImagePicker;
