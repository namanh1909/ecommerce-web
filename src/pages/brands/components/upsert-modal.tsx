import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useModalStore } from '@/hooks';
import { Button, Input, ErrorMessage } from '@/components/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import ImagePicker from '@/components/ui/imagePicker';
import { createBrandSchema } from '@/features/brands/schemas';
import {
  useAddBrandMutation,
  useUpdateBrandMutation,
} from '@/features/brands/hooks/use-brand-query';

type BrandFormInput = {
  id?: string;
  brandName: string;
  brandImage?: string;
  description?: string;
};

const UpsertProductModal: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<BrandFormInput>({
    resolver: yupResolver(createBrandSchema),
    defaultValues: {
      brandName: '',
      description: '',
      brandImage: '',
      id: '',
    },
  });
  const isOpen = useModalStore((state) => state.isOpen);
  const open = useModalStore((state) => state.open);
  const close = useModalStore((state) => state.close);
  const params = useModalStore((state) => state.params);

  console.log('params', params);

  const { mutate: addBrand } = useAddBrandMutation();
  const { mutate: updateBrand } = useUpdateBrandMutation();

  const onSubmit = (data: BrandFormInput) => {
    const form = new FormData();
    form.append('brandName', data.brandName);
    form.append('brandImage', data.brandImage as string);
    form.append('description', data.description as string);
    if (params?._id) {
      updateBrand(
        { id: params._id, params: form },
        {
          onSettled: () => {
            reset();
            close();
          },
        },
      );
    } else {
      addBrand(form, {
        onSettled: () => {
          reset();
          close();
        },
      });
    }
  };

  useEffect(() => {
    if (params?._id) {
      setValue('id', params._id);
      setValue('brandName', params.brandName);
      setValue('brandImage', params.brandImage);
      setValue('description', params.description);
    }
  }, [isOpen]);

  const onOpenChange = () => {
    if (isOpen) return close();
    open();
  };

  const handleChange = (file: File) => {

  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {params?._id ? 'Update brand' : 'Create new brand'}
          </DialogTitle>
          {!params?._id && (
            <DialogDescription>
              Fill in the details to create a new brand.
            </DialogDescription>
          )}
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center mb-4">
            <ImagePicker control={control} name="brandImage" handleChange={handleChange} />
          </div>
          <div className="grid gap-4">
            <Controller
              name="brandName"
              control={control}
              rules={{ required: 'Brand name is required' }}
              render={({ field }) => (
                <Input {...field} placeholder="Brand Name" />
              )}
            />
            {errors.brandName && (
              <ErrorMessage message={errors.brandName.message as string} />
            )}
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Description" />
              )}
            />
            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpsertProductModal;
