import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'components/Header';
import Button from 'components/Button';
// https://react-hook-form.com/
// https://react-hook-form.com/get-started#SchemaValidation
import { useForm } from 'react-hook-form';
import { createItem } from 'store/reducers/items';
import { useParams } from 'react-router-dom';
import Input from 'components/Input';

import S from './Advertise.module.scss';

const Advertise = () => {
  const { categoryName = '' } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector((state) =>
    state.categories.map(({ name, id }) => ({ name, id })),
  );

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      category: categoryName,
    },
  });
  const { errors } = formState;

  const createSubmit = (data) => {
    dispatch(createItem(data));
  };

  return (
    <div className={S.container}>
      <Header
        title="Advertise here"
        description="Advertise your product on the best website in Brazil"
      />
      <form className={S.form} onSubmit={handleSubmit(createSubmit)}>
        <Input
          className={errors.title ? S['input-error'] : ''}
          {...register('title', { required: 'title is required' })}
          placeholder="Title"
          alt="title"
        />
        {errors.title && (
          <span className={S['error-message']}> {errors.title.message} </span>
        )}

        <input
          className={errors.description ? S['input-error'] : ''}
          {...register('description', {
            required: 'description is required',
          })}
          placeholder="Description"
          alt="description"
        />
        {errors.description && (
          <span className={S['error-message']}>
            {' '}
            {errors.description.message}{' '}
          </span>
        )}

        <input
          className={errors.photo ? S['input-error'] : ''}
          {...register('photo', { required: 'Photo is required' })}
          placeholder="Photo URL"
          alt="photo url"
        />
        {errors.image && (
          <span className={S['error-message']}> {errors.image.message} </span>
        )}

        <select
          className={errors.category ? S['input-error'] : ''}
          disabled={!!categoryName}
          {...register('category', {
            required: 'category is required',
          })}
        >
          <option value="" disabled>
            Select category
          </option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <span className={S['error-message']}>
            {' '}
            {errors.category.message}{' '}
          </span>
        )}

        <input
          className={errors.price ? S['input-error'] : ''}
          {...register('price', {
            required: 'price is required',
            valueAsNumber: true,
          })}
          type="number"
          placeholder="Price"
        />
        {errors.price && (
          <span className={S['error-message']}> {errors.price.message} </span>
        )}

        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default Advertise;
