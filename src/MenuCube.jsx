/* eslint-disable react/prop-types */
// import MenuItemCube from './MenuItemCube';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Navigation } from "swiper/modules";



const MenuCube = ({ items }) => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
      }}
      pagination={pagination}
      navigation
      modules={[EffectCube, Pagination, Navigation]}
    >
      {items.map((menuItemCube) => {
        const { id, img, title, price, desc } = menuItemCube;
        return (
          // <MenuItemCube key={menuItem.id} {...menuItem} />
          <SwiperSlide key={id} className="swiper-slide">
            <article className="article">
              <img src={img} alt={title} className="img" />
              <div className="item-info">
                <header>
                  <h5>{title}</h5>
                  <span className="item-price">${price}</span>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MenuCube;
