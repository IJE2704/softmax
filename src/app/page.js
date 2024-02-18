import Navbar from '@/components/Navbar';
import Image from 'next/image';

import logo from '@/assets/softmaxLogo.png';
import Header from '@/components/Header';
import Course from '@/components/Course';
import Categories from '@/components/Categories';
import Instructor from '@/components/Instructor';
import Achievement from '@/components/Achievement';

import Join from '@/components/join';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='border-b border-[1px] border-[#E7E9EB] hidden lg:block'></div>
      <Header></Header>
      <div className='bg-[#E9F8F3B2]'>
        <Course></Course>
      </div>
      <Categories></Categories>
      <div className='bg-[#FFFAF5]'>
      <Instructor></Instructor>
      </div>
      <Achievement></Achievement>
      <div className='bg-[#E9F8F3B2]'>
        <Join></Join>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;