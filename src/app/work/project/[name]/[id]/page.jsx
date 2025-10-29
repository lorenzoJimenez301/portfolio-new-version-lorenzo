import data from '../../../../../../public/data/projects-with-blur.json'
import { notFound } from 'next/navigation'
import { ProjectPage } from './projectView'

export async function generateStaticParams () {
  return data.map(i => ({
    name: encodeURIComponent(i.name),
    id: i.id.toString()
  }))
}

export default async function projectBuild ({ params }) {
  const { id, name } = await params

  const selected = data.find(
    i => i.name === decodeURIComponent(name) && i.id.toString() === id
  )

  if (!selected) {
    notFound()
  }

  return <ProjectPage project={selected} />
}
