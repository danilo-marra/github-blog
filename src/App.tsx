import './App.css'
import logo from './assets/logo.svg'
import Profile from './components/Profile'
import SearchBar from './components/SearchBar'
import Content from './components/Content'
import { useForm } from 'react-hook-form'
import { SearchData, UserSchema } from './types'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useState, useEffect } from 'react'
import IssueDetails from './components/IssueDetails'

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

export default function App() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [filteredIssues, setFilteredIssues] = useState<Issue[]>([]);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<SearchData>({
    resolver: zodResolver(UserSchema)
  });

  useEffect(() => {
    const fetchIssues = async () => {
      const response = await axios.get('https://api.github.com/repos/danilo-marra/github-blog/issues');
      setIssues(response.data);
      setFilteredIssues(response.data);
    };

    fetchIssues();
  }, []);

  const onSubmit = (data: SearchData) => {
    const filtered = issues.filter(issue =>
      issue.title.toLowerCase().includes(data.query.toLowerCase()) ||
      issue.body.toLowerCase().includes(data.query.toLowerCase())
    );
    setFilteredIssues(filtered);
    reset();
  }

  const fetchIssueDetails = async (issueNumber: number) => {
    const response = await axios.get(`https://api.github.com/repos/danilo-marra/github-blog/issues/${issueNumber}`);
    setSelectedIssue(response.data);
  }

  return (
    <div>
      <div className='max-w-[1140px] mx-auto font-nunito'>

        <div className='flex justify-center min-h-[296px] bg-cover bg-center'>
          <div className='text-center pt-16'>
            <img src={logo} alt="Github Blog" className='mx-auto' />
            <h1 className='text-blue font-coda text-2xl pt-4' >
              Github Blog
            </h1>
          </div>
        </div>

        <Profile />

        <div className='max-w-[864px] mx-auto'>
          <SearchBar
            dataContent={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            placeholder='Buscar conteúdo'
            error={errors.query}
            issues={filteredIssues}
          />

          {selectedIssue ? (
            <IssueDetails issue={selectedIssue} onBack={() => setSelectedIssue(null)} />
          ) : (
            <Content issues={filteredIssues} onIssueClick={fetchIssueDetails} />
          )}
        </div>
      </div>
    </div>
  )
}