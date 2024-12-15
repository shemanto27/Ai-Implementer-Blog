'use client'

import { useState } from 'react'

// Mock data for demonstration
const initialSubscriptions = [
  { id: 1, email: 'user1@example.com', date: '2023-05-15' },
  { id: 2, email: 'user2@example.com', date: '2023-05-20' },
  { id: 3, email: 'user3@example.com', date: '2023-05-25' },
]

export default function SubscriptionList() {
  const [subscriptions] = useState(initialSubscriptions)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Subscription List</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subscriptions.map((subscription) => (
              <tr key={subscription.id}>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

