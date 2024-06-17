import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CustomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  // Custom arrow components
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute top-1/2 right-2 transform -translate-y-1/2`}
        style={{ ...style, zIndex: 1 }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M13.293 10l-3.147 3.146a.5.5 0 0 1-.708 0l-.707-.707a.5.5 0 0 1 0-.708l2.353-2.353-2.353-2.354a.5.5 0 0 1 0-.707l.707-.707a.5.5 0 0 1 .708 0L13.293 9.1a.5.5 0 0 1 0 .707z" />
        </svg>
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute top-1/2 left-2 transform -translate-y-1/2`}
        style={{ ...style, zIndex: 1 }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6.707 10l3.146-3.146a.5.5 0 0 1 .708 0l.707.707a.5.5 0 0 1 0 .708l-2.353 2.353 2.353 2.354a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 0 1-.708 0L6.707 10.9a.5.5 0 0 1 0-.707z" />
        </svg>
      </div>
    );
  }

  return (
    <div className='w-3/4 m-auto relative pb-10'>
      <div className='mt-20 '>
        <Slider {...settings}>
          {/* Mapping data as before */}
          {data.map((d) => (
            <div key={d.name} className='bg-white h-[450px] px-5 pb-7 text-black rounded-xl mx-4'>
              <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt={d.name} className='h-44 w-44 rounded-full' />
              </div>
              <div className='flex flex-col items-center justify-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{d.name}</p>
                <p className='text-center'>{d.review}</p>
                <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  
  {
    name: 'Anjan Lahiri',
    img:' https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1581914257_ZgwkwqA4sj.jpg?w=320&format=webp ',
    review: `BE, Electrical And Electronics Engg. Batch of 1987
    CEO Navikenz`
  },

  {
    name: 'Dorji Choden',
    img:' https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1581656660_sxPr29ZITe.jpg?w=320&format=webp',
    review: `BE, Civil Engg Batch of 1984
    Politician Minister of Bhutan's Works and Human Settlement Ministry`
  },
    
  {
    name: 'Arun Nathan',
    img:' https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1581664074_vtI8AFTBOs.jpg?w=320&format=webps',
    review: `BE, Electrical Engg Batch of 1969
    GERB Vibration Control systems Pvt. Ltd. Director`
  },

  {
    name:' Pawan Bhageria',
    img: 'https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1581663638_dtNih8Oa8Z.jpg?w=320&format=webp',
    review: `BE, Mechanical Engg. Batch of 1983
    Tata Technologies President`
  },

  {
    name:' Tanuja Prasad',
    img: 'https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1581914866_fSTWAqgWn7.jpg?w=320&format=webp',
    review: `B. E., Electrical & Electronics
    Ex Senior VP Goldman Sachs`
  },


  {
    name: 'Rajiv Kaul',
    img:' https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1581664138_AAKhR40GyE.jpg?w=320&format=webp',
    review: `BE, Computer Science Batch of 1989
    CMS Info Systems Vice Chairman and CEO`
  },

  {
    name:' Rana S Chakraborty',
    img:' https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1581923633_L4dUmqjQmp.jpg?w=320&format=webp',
    review: `B.Sc. Mechanical Engg Batch of 1985
    Heavy Engineering Corporation Ltd. Director ( Marketing)`
  },

  {
    name:' Subhash Dhar',
    img: 'https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1581663775_zTBydVZPb6.jpg?w=320&format=webp',
    review: `BE, Computer Science Batch of 1987
    Co-founder & CEO Commence Mint Ventures`
  },

  {
    name: 'Sunil Sinha',
    img: 'https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1581656415_ZEzQ1Lbk7L.jpg?w=320&format=webp',
    review: `BE, Civil Engg. Batch of 1986
    Virginia Tech, Professor & Director at SWIM Center`
  }
];

export default  CustomSlider;
