import axios from "axios";
import { useState, useEffect } from "react";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Issue {
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
  labels: {
    name: string;
  }[];
}

export default function Content() {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function getIssues() {
      const response = await axios.get('https://api.github.com/repos/danilo-marra/github-blog/issues');
      setIssues(response.data);
    }
    getIssues();
  }, []);

  if (issues.length === 0) return "No issues!";

  return (
    <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'>
      {issues.map((issue, index) => (
        <div key={index} className='publishCard w-[416px] h-[260px] bg-post px-8 py-12 rounded-md overflow-hidden overflow-y-auto custom-scrollbar '>
          <div className='publishHeader flex justify-between'>
            <h1 className='text-title text-lg max-w-60'>{issue.title}</h1>
            <span className='text-span text-sm'>
              {formatDistanceToNow(new Date(issue.updated_at), { addSuffix: true, locale: ptBR })}
            </span>
          </div>
          <div className='publishContent text-text mt-6'>
            <p>{issue.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}