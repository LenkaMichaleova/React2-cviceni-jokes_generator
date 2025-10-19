/* eslint-disable react/prop-types */
import { useState } from 'react';
import './form.scss';

const TYPES = ['general', 'dad', 'knock-knock', 'programming'];

interface FormProps {
  onSubmitData: (data: { name: string; type: string; count: number }) => void;
}

interface FormData {
  name: string;
  type: string;
  count: number;
}

export const Form = ({ onSubmitData }: FormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    type: '',
    count: 0,
  })

  const options = [];
  for (let i = 0; i < 10; i++) {
    options.push(i + 1);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitData(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        Your name
        <input
          className="form__input"
          name='name'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
          required
        />
      </label>

      <label className="form__label">
        Select type of Jokes
        <select
          className="form__input"
          name='name'
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({...formData, type: e.target.value})}
          required
        >
          <option value="">Select one</option>
          {TYPES.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>

      <label className="form__label">
        Select count of Jokes
        <select
          className="form__input"
          name='count'
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({...formData, count: e.target.value ? parseInt(e.target.value, 10) : 0})}
          required
        >
          <option value="">Select one</option>
          {options.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>

      <button className="form__button" type='submit'>Submit</button>
    </form>
  );
};
