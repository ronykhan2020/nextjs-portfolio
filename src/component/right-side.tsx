import { siteConfig } from '@/config/site-config';
import React from 'react'
import GridItem from './grid-item';
import SocialBox from './grid-items/social-box';
import MentorshipBox from './grid-items/mentorship-box';
import ProjectBox from './grid-items/project-box';
import EquipmentsBox from "../component/grid-items/equipments-box"

const RightSide = () => {
  return (
    <div className="flex-1 h-full ">
    {/* Grid Container */}
    <div className="w-full h-full overflow-y-auto p-2 grid grid-cols-4 auto-rows-[76px] gap-6  ">
      {siteConfig.items.map((item, index) => {
        return (
          <GridItem key={item.title + index} size={item.layout}>
            {
              item.type === "social" ? (
                <SocialBox item={item} />
              ) : item.type === 'mentor' ? (
                <MentorshipBox  item={item}  />
              ) : item.type === "project" ? (
                <ProjectBox item={item} />
              ) : item.type === "equipment" ? (
                <EquipmentsBox item ={item} />
              ) : (
                <div> Not Equipment</div>
              )
            }
          </GridItem>
        );
      })}
    </div>
  </div>
  )
}

export default RightSide