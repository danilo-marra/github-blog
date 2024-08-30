import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

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

type IssueDetailsProps = {
  issue: Issue;
  onBack: () => void;
}

export default function IssueDetails({ issue, onBack }: IssueDetailsProps) {
  return (
    <div className='mt-12'>
      <button onClick={onBack} className='mb-4 text-text'>Voltar</button>
      <div className='publishCard w-full bg-post px-8 py-12 rounded-md overflow-hidden overflow-y-auto custom-scrollbar'>
        <div className='publishHeader flex justify-between'>
          <h1 className='text-title text-xl'>{issue.title}</h1>
          <span className='text-span text-sm'>
            {formatDistanceToNow(new Date(issue.updated_at), { addSuffix: true, locale: ptBR })}
          </span>
        </div>
        <article className='mt-6'>
          <p className="text-base text-pretty text-text">{issue.body}</p>
        </article>
      </div>
    </div>
  );
}