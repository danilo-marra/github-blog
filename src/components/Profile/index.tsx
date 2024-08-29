import { ArrowSquareOut, Building, GithubLogo, Users } from "@phosphor-icons/react";
import axios from "axios";
import { useState, useEffect } from "react";

const client = axios.create({
  baseURL: "https://api.github.com/users"
});

interface Profile {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  login: string;
}


export default function Profile() {

  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    async function getProfile() {
      const response = await client.get("/danilo-marra");
      setProfile(response.data);
    }
    getProfile();
  }, []);

  if (!profile) return "No post!"

  return (

    <div className='profileWrapper max-w-[864px] flex items-center bg-profile mx-auto rounded-lg p-7 shadow-lg -translate-y-1/2'>
      <div className='profilePicture w-[148px]'>
        <img src={profile.avatar_url} className='rounded-lg' alt='Profile Picture' />
      </div>
      <div className='profileContent px-5 w-full space-y-5'>
        <div className='profileTitle flex justify-between'>
          <h2 className='text-title text-2xl'>{profile.name}</h2>
          <div className='text-blue flex items-center space-x-1 font-bold'>
            <a href='#' className='text-blue uppercase text-xs'>Github</a>
            <ArrowSquareOut size={16} weight='bold' />
          </div>
        </div>
        <p className='text-text leading-6'>{profile.bio}</p>
        <div className='profileSocial flex text-label mt-2 space-x-2'>
          <GithubLogo size={24} weight='fill' />
          <a href='#' className='text-text'>{profile.login}</a>
          <Building size={24} weight='fill' />
          <a href='#' className='text-text'>XPTO</a>
          <Users size={24} weight="fill" />
          <a href='#' className='text-text'>{profile.followers} seguidores</a>
        </div>
      </div>
    </div>
  )
}