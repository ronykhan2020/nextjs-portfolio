import { GridItemInterface } from '@/config/site-config'
import Icon from '../icon'
import Link from 'next/link'

const MentorshipBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link href={item.buttonLink ?? ""} className='flex items-center gap-3 '>
      {/* Icon */}
      <Icon type={item.icon ?? ""} color={item.color ?? ""} />
      {/* Title */}
      <div className='text-lg font-semibold w-full'>{item.title}</div>
      {/* Container */}
      <div>
        {/* Top Content */}

        <div className='flex items-center justify-between '>
          <div className='text-xs  text-neutral-500'>PROMO</div>
          <div className='flex items-center gap-1'>
            <span className='text-xs line-through text-neutral-500'>{item.oldPrice}</span>
            <span>{item.price}</span>
          </div>
         
        </div>
         {/* Botton Container */}
         <div className='font-bold text-blue-400  '>{item.promotion}</div>
      </div>
    </Link>
  )
}

export default MentorshipBox