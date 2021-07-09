import { useEffect, useState } from 'react'

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList () {
  const [repo, setRepo] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/kevinportella/repos')
      .then(response => response.json())
      .then(data => setRepo(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>

        {repo.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository}/>
        })}

      </ul>
    </section>
  )
}

  //https://api.github.com/users/kevinportella/repos

  // () => {qual função eu quero executar} => [Quando quero executar];
  // se o array [] for vazio, ela executa uma única vez a função;
  // se passar o useEffect sem o segundo parâmetro "() => {}", ela entra em loop;
