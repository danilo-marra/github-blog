import { FieldError, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { SearchData } from "../../types";

interface Issue {
  number: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
  labels: {
    name: string;
  }[];
}

type SearchFieldProps = {
  dataContent: UseFormRegister<SearchData>;
  handleSubmit: UseFormHandleSubmit<SearchData>;
  onSubmit: (data: SearchData) => void;
  placeholder: string;
  error: FieldError | undefined;
  issues: Issue[];
}

export default function SearchBar({ dataContent, handleSubmit, onSubmit, placeholder, error, issues }: SearchFieldProps) {
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-between'>
          <h3 className='text-title'>Publicações</h3>
          <p className='text-text text-sm'>{issues.length} publicações</p>
        </div>
        <div>
          <input
            placeholder={placeholder}
            {...dataContent('query')}
            className='w-full h-[50px] text-text bg-input rounded-md px-4 ring-1 ring-pink-500 mt-4' type='text' />
          {error && <span className='text-red text-sm'>{error.message}</span>}
        </div>
      </form>
    </div>
  )
}