
import { Sidebar } from '@/components/admin/sidebar'

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

