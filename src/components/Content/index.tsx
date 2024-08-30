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

type ContentProps = {
  issues: Issue[];
  onIssueClick: (issueNumber: number) => void;
}

export default function Content({ issues, onIssueClick }: ContentProps) {
  if (issues.length === 0) return <p className='text-red'>No issues!</p>;

  return (
    <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'>
      {issues.map((issue, index) => (
        <div
          key={index}
          className='publishCard w-[416px] h-[260px] bg-post px-8 py-12 rounded-md overflow-hidden overflow-y-auto custom-scrollbar cursor-pointer'
          onClick={() => onIssueClick(issue.number)}
        >
          <div className='publishHeader flex justify-between'>
            <h1 className='text-title text-xl max-w-60 text-balance'>{issue.title}</h1>
            <span className='text-span text-sm'>
              {formatDistanceToNow(new Date(issue.updated_at), { addSuffix: true, locale: ptBR })}
            </span>
          </div>
          <article className='mt-6'>
            <p className="text-base text-pretty text-text">{issue.body}</p>
          </article>
        </div>
      ))}
    </div>
  );
}