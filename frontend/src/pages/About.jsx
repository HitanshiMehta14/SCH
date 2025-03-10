import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus aliquam at amet ea optio incidunt accusantium sint magni praesentium quos officiis provident harum libero maiores quas animi, fuga sunt! Vel maxime consequuntur veniam hic molestias, iure nulla mollitia ipsam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, tempore voluptatum ullam repellat molestiae ducimus magni nemo voluptatibus molestias hic illum autem quas ut vitae in, possimus labore ipsam unde inventore! Illo ipsum nisi adipisci!</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat provident aut assumenda doloremque cumque, dicta ipsum labore quisquam magnam necessitatibus, consectetur explicabo eligendi incidunt nesciunt neque veritatis cupiditate obcaecati libero?</p>
          </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit iste porro ipsam obcaecati omnis rerum? Expedita earum facere nobis quisquam, ipsum asperiores iusto sed nostrum iste! Excepturi, quo nesciunt.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit iste porro ipsam obcaecati omnis rerum? Expedita earum facere nobis quisquam, ipsum asperiores iusto sed nostrum iste! Excepturi, quo nesciunt.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit iste porro ipsam obcaecati omnis rerum? Expedita earum facere nobis quisquam, ipsum asperiores iusto sed nostrum iste! Excepturi, quo nesciunt.</p>
        </div>

      </div>
      <NewsletterBox />
    </div>
  )
}

export default About