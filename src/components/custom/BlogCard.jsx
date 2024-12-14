import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function BlogCard({id, title, date, publisher, imageUrl, publisherImageUrl,category }) {
  return (
    <Card className="w-full max-w-sm bg-gray-800 text-gray-100">
      <CardHeader className="p-0">
        <Link href={`/blog/${id}`}>
        <Image
          src={imageUrl}
          alt={title}
          width={384}
          height={200}
          className="w-full h-48 object-cover"
        />
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl mb-2"><Link href={`/blog/${id}`}>{title}</Link></CardTitle>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={publisherImageUrl} alt={publisher} />
              <AvatarFallback>{publisher.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-400">{publisher}</span>
            <span className='bg-blue-600 rounded-3xl text-sm p-1'>{category}</span>
          </div>
          <span className="text-sm text-gray-400">{date}</span>
        </div>
      </CardContent>
    </Card>
  )
}

