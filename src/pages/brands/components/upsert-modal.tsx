import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useModalStore } from '@/hooks';
import { Button, Input, ErrorMessage } from '@/components/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import { ListPlus } from 'lucide-react';
import ImagePicker from '@/components/ui/imagePicker';
import { createBrandSchema } from '@/features/brands/schemas';
import { useAddBrandMutation } from '@/features/brands/hooks/use-brand-query';
import { BrandMutation } from '@/features/brands/services/type';

type BrandFormInput = {
  brandName: string;
  brandImage?: string;
  description?: string;
};

const UpsertProductModal: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BrandFormInput>({
    resolver: yupResolver(createBrandSchema),
    defaultValues: {
      brandName: '',
      description: '',
      brandImage: ''
    },
  });
  const isOpen = useModalStore((state) => state.isOpen);
  const open = useModalStore((state) => state.open);
  const close = useModalStore((state) => state.close);
  const { mutate: addBrand } = useAddBrandMutation();

  const onSubmit = (data: BrandFormInput) => {
    addBrand(data as BrandMutation, {
      onSuccess: () => {
        close();
        reset();
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={isOpen ? close : open}>
      <DialogTrigger asChild>
        <Button onClick={open}>
          <ListPlus className="mr-2 h-4 w-4" /> Add New Product
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new brand</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new brand.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex justify-center mb-4'>
            <ImagePicker control={control} name="brandImage" />
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
              render={({ field }) => <Input {...field} placeholder="Description" />}
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
