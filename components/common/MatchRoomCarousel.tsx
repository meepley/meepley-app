import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useWindowDimensions } from "react-native";

import { widthPer } from "@utils/helpers/wp";
import MatchRoomCard from "@components/common/MatchRoomCard";
import { IMatchRoom } from "@ts/interfaces/IMatchRoom";

const colors = ["lYellow.500", "brand.500", "lGreen.500"];

const MatchRoomCarousel: React.FC<{
  matchRooms: IMatchRoom[];
  pagination?: boolean;
}> = ({ matchRooms, pagination = true }) => {
  const [sliderActiveItem, setSliderActiveItem] = useState(1);
  const { width: viewportWidth } = useWindowDimensions();

  const slideWidth = widthPer(55, viewportWidth);
  const itemHorizontalMargin = widthPer(2, viewportWidth);
  const sliderWidth = viewportWidth;
  const itemWidth = slideWidth + itemHorizontalMargin * 2;
  let sliderRef;

  return (
    <>
      <Carousel
        ref={(c) => (sliderRef = c)}
        data={matchRooms}
        renderItem={({ item, index }) => {
          const bgColor = colors[(index + 1) % colors.length];
          const isActive = sliderActiveItem === index;

          return (
            <MatchRoomCard
              item={item}
              isActive={isActive}
              index={index}
              bgColor={bgColor}
            />
          );
        }}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        hasParallaxImages={true}
        firstItem={1}
        inactiveSlideScale={0.8}
        inactiveSlideOpacity={0.4}
        loop={true}
        loopClonesPerSide={2}
        autoplay={false}
        onSnapToItem={(index) => setSliderActiveItem(index)}
      />

      {pagination && (
        <Pagination
          dotsLength={matchRooms.length}
          activeDotIndex={sliderActiveItem}
          dotColor="#A69BEA"
          inactiveDotColor="rgba(78, 78, 78, 0.92)"
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={sliderRef}
          tappableDots={!!sliderRef}
        />
      )}
    </>
  );
};

export default MatchRoomCarousel;
