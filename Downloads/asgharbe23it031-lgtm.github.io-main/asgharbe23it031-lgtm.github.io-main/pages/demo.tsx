import dynamic from 'next/dynamic'

const Globe = dynamic(() => import('../components/ui/3d-orb'), { ssr: false })

export default function DemoOne() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <Globe />
    </main>
  )
}
