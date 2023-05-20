import { HandThumbUpIcon as LikeOutline } from '@heroicons/react/24/outline'
import { HandThumbUpIcon as LikeSolid } from '@heroicons/react/24/solid'

export function defineLikeIcon(isLiked: boolean) {
  return isLiked ? LikeSolid : LikeOutline
}
