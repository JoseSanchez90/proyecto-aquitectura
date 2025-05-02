import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  href: string
}

export function ProjectCard({ title, category, image, href }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={href} className="group block">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{category}</p>
        </CardContent>
      </Link>
    </Card>
  )
}
