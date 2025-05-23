import { Scale, Building2, User, FileText } from 'lucide-react'
import './Impressum.css'

function Impressum() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-zinc-800">
          <Scale size={30} className="text-blue-400" />
        </div>
        <h1 className='text-3xl font-bold text-white mb-4'>Impressum</h1>
      </div>

      {/* Content Sections */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Company Info */}
        <div className="bg-zinc-800/50 rounded-2xl p-6 space-y-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <Building2 size={20} className="text-blue-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">Unternehmen</h2>
          </div>
          <div className="space-y-2 text-zinc-300">
            <p className="font-medium text-white">Schubert Automobile</p>
            <p>Liebigstraße 7, 24145 Kiel</p>
            <p>
              <a 
                href="mailto:info@schuberts-automobile.de"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                info@schuberts-automobile.de
              </a>
            </p>
          </div>
        </div>

        {/* Management */}
        <div className="bg-zinc-800/50 rounded-2xl p-6 space-y-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <User size={20} className="text-blue-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">Vertreten durch</h2>
          </div>
          <div className="space-y-2 text-zinc-300">
            <p>Geschäftsführer: Juliano Schubert</p>
          </div>
        </div>

        {/* Tax Info */}
        <div className="bg-zinc-800/50 rounded-2xl p-6 space-y-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <FileText size={20} className="text-blue-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">Umsatzsteuer-ID</h2>
          </div>
          <div className="space-y-2 text-zinc-300">
            <p>DE-370427982</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Impressum