import tw, { css } from 'twin.macro'
import { BurgerMenu } from '../components/svg/burger-menu'
import { Logo } from '../components/svg/logo'
import { MdTranslate } from 'react-icons/md'
import { IoMdDocument } from 'react-icons/io'
import { Web } from '../components/svg/web'
import { Options } from '../components/svg/options'
import Image from 'next/image'
import { MdClose } from 'react-icons/md'
import { FaMicrophone } from 'react-icons/fa'
import { HiVolumeUp } from 'react-icons/hi'
import { AiOutlineStar } from 'react-icons/ai'
import { MdOutlineContentCopy } from 'react-icons/md'
import { RateTheTranslation } from '../components/svg/rate-the-translation'
import { BsShareFill } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { RiArrowLeftRightFill } from 'react-icons/ri'
import { MdHistory } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function _() {
    return (
        <div tw='font-google-sans'>
            <header tw='flex px-16 py-10 justify-between '>
                <div tw='flex items-center gap-x-6'>
                    <BurgerMenu tw='w-5' />

                    <div tw='flex items-center gap-x-2'>
                        <Logo tw='h-8' />
                        <span tw='font-medium text-lg'>Translate</span>
                    </div>
                </div>

                <div tw='flex gap-x-20'>
                    <div tw='flex items-center gap-x-12 text-_dark-text'>
                        <div tw='flex items-center gap-x-2.5'>
                            <MdTranslate tw='w-5 h-5' />
                            <span tw='font-medium text-lg'>SMS</span>
                        </div>
                        <div tw='flex items-center gap-x-2.5'>
                            <IoMdDocument tw='w-5 h-5' />
                            <span tw='font-medium text-lg'>Document</span>
                        </div>
                        <div tw='flex items-center gap-x-2.5'>
                            <Web tw='w-5 h-5' />
                            <span tw='font-medium text-lg'>Website</span>
                        </div>
                    </div>

                    <div tw='flex items-center gap-x-6'>
                        <Options tw='h-5 w-5' />
                        <div tw='relative rounded-full overflow-hidden w-12 h-12'>
                            <Image
                                src='https://wallpapersmug.com/download/1024x768/9dcfb2/autumn-tree-branch-anime-girl-cute.jpg'
                                layout='fill'
                            />
                        </div>
                    </div>
                </div>
            </header>

            <main tw='w-full space-y-12 text-_dark-text relative before:(absolute top-0 w-full h-px bg-gray-100)'>
                <section tw='w-full relative flex text-_dark-text'>
                    <div tw='absolute left-[calc(50% - 38px)] top-[calc(72% - 38px)] flex justify-center bg-_light-blue p-7 rounded-[24px]'>
                        <RiArrowLeftRightFill tw='w-5 h-5' />
                    </div>

                    <div tw='pl-16 w-full flex'>
                        <div tw='w-full'>
                            <div tw='flex gap-x-4 py-6'>
                                <button type='button' tw='bg-_blue rounded-xl px-4 py-3.5 font-medium'>
                                    Detect Language
                                </button>
                                <button type='button' tw='text-gray-400 rounded-xl px-4 py-3.5 font-medium'>
                                    English
                                </button>
                                <button type='button' tw='text-gray-400 rounded-xl px-4 py-3.5 font-medium'>
                                    Ukrainian
                                </button>
                                <span tw='px-4 py-3.5 flex items-center'>
                                    <IoIosArrowDown tw='w-5 h-5' />
                                </span>
                            </div>

                            <div tw='py-8 w-full relative before:(absolute top-0 w-full h-px bg-gray-100)'>
                                <div tw='flex'>
                                    <textarea
                                        spellCheck='false'
                                        tw='text-2xl font-medium resize-none w-full h-72 bg-transparent outline-none'
                                    >
                                        Hello, how are you?
                                    </textarea>
                                    <MdClose tw='w-6 h-6' />
                                </div>
                                <div tw='flex justify-between'>
                                    <div tw='flex gap-x-5 items-center'>
                                        <FaMicrophone tw='w-5 h-5' />
                                        <HiVolumeUp tw='w-5 h-5' />
                                    </div>

                                    <span tw='text-gray-400 rounded-xl font-medium leading-[1.7]'>
                                        19 / 5000
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div tw='w-16'></div>
                    </div>

                    <div tw='pr-16 w-full bg-_light-gray flex'>
                        <div tw='w-16'></div>
                        <div tw='w-full'>
                            <div tw='flex gap-x-4 py-6'>
                                <button type='button' tw='bg-_blue rounded-xl px-4 py-3.5 font-medium'>
                                    Georgian
                                </button>
                                <button type='button' tw='text-gray-400 rounded-xl px-4 py-3.5 font-medium'>
                                    English
                                </button>
                                <button type='button' tw='text-gray-400 rounded-xl px-4 py-3.5 font-medium'>
                                    Ukrainian
                                </button>
                                <span tw='px-4 py-3.5 flex items-center'>
                                    <IoIosArrowDown tw='w-5 h-5' />
                                </span>
                            </div>

                            <div tw='py-8 w-full relative before:(absolute top-0 w-full h-px bg-gray-200)'>
                                <div tw='flex'>
                                    <textarea
                                        spellCheck='false'
                                        tw='text-2xl font-medium resize-none w-full h-72 bg-transparent outline-none'
                                    >
                                        Hello, how are you?
                                    </textarea>
                                    <AiOutlineStar tw='w-6 h-6' />
                                </div>
                                <div tw='flex justify-between'>
                                    <div tw='flex gap-5 items-center'>
                                        <HiVolumeUp tw='w-5 h-5' />
                                        <span tw='font-medium text-gray-400'>gamarjoba rogor hkar?</span>
                                    </div>

                                    <div tw='flex gap-x-5'>
                                        <MdOutlineContentCopy tw='w-5 h-5' />
                                        <RateTheTranslation tw='w-5 h-5' />
                                        <BsShareFill tw='w-5 h-5' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div tw='w-16'></div>
                    </div>
                </section>

                <section tw='px-16 flex flex-col gap-y-6'>
                    <header tw='flex justify-between'>
                        <div tw='flex relative before:(absolute top-[calc(100% - 1px)] w-full h-px bg-gray-100) after:(absolute top-[calc(100% - 3px)] w-[calc(100% / 2)] h-1 bg-_power-blue)'>
                            <div tw='flex gap-x-3 text-_power-blue items-center font-medium px-4 py-4'>
                                <MdHistory tw='w-5 h-5' />
                                <span>History</span>
                            </div>
                            <div tw='flex gap-x-3 items-center font-medium px-4 py-4'>
                                <AiFillStar tw='w-5 h-5' />
                                <span>Saved</span>
                            </div>
                        </div>

                        <div tw='flex gap-x-4 text-gray-400'>
                            <span tw='font-medium'>Hide</span>
                            <BsThreeDotsVertical tw='w-5 h-5' />
                        </div>
                    </header>

                    <div tw='grid grid-cols-3 gap-x-2'>
                        <div tw='space-y-2'>
                            <div tw='bg-_light-gray p-4 rounded-xl flex flex-col gap-y-4'>
                                <div tw='flex justify-between'>
                                    <div tw='flex gap-x-2 items-center font-medium bg-_blue rounded-xl px-4 py-3'>
                                        <span>English</span>
                                        <MdOutlineKeyboardArrowRight tw='w-5 h-5' />
                                        <span>French</span>
                                    </div>

                                    <div tw='flex gap-x-3 items-center'>
                                        <AiOutlineStar tw='w-5 h-5' />
                                        <BsThreeDotsVertical tw='w-5 h-5 text-gray-400' />
                                    </div>
                                </div>

                                <div tw='flex flex-col gap-y-2 font-medium'>
                                    <span>
                                        oaskdoas aosdkosakdo askdo kasokd oasko dkasok doas kdok asodk oasdk
                                        oaksdddddddddddddddddddddddddddddddddddddddddddddddddas odk aasdas asd
                                        asd asd asdasdasd asdasdasd asdasdasdasd asdasd
                                    </span>

                                    <span tw='w-full h-px bg-gray-200' />

                                    <span tw='text-gray-400'>
                                        oaskdoas aosdkosakdo askdo kasokd oasko dkasok doas kdok asodk oasdk
                                        oaksasddddddassssssssssssssssssssssss odk
                                    </span>
                                </div>
                            </div>
                            <div tw='bg-_light-gray p-4 rounded-xl flex flex-col gap-y-4'>
                                <div tw='flex justify-between'>
                                    <div tw='flex gap-x-2 items-center font-medium bg-_blue rounded-xl px-4 py-3'>
                                        <span>English</span>
                                        <MdOutlineKeyboardArrowRight tw='w-5 h-5' />
                                        <span>French</span>
                                    </div>

                                    <div tw='flex gap-x-3 items-center'>
                                        <AiOutlineStar tw='w-5 h-5' />
                                        <BsThreeDotsVertical tw='w-5 h-5 text-gray-400' />
                                    </div>
                                </div>

                                <div tw='flex flex-col gap-y-2 font-medium'>
                                    <span>
                                        oaskdoas aosdkosakdo askdo kasokd oasko dkasok doas kdok asodk o
                                        odksadasdsad asdsadsaddddddddddddddddddddddd asdasdasdsadsa
                                        dasdasdsadsadas dasdas dsad
                                    </span>

                                    <span tw='w-full h-px bg-gray-200' />

                                    <span tw='text-gray-400'>
                                        oaskdoas aosdkosakdo askdo kasokd oasko dkasok doak oasdk oaks odk
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div tw='space-y-2'>
                            <div tw='bg-_light-gray p-4 rounded-xl flex flex-col gap-y-4'>
                                <div tw='flex justify-between'>
                                    <div tw='flex gap-x-2 items-center font-medium bg-_blue rounded-xl px-4 py-3'>
                                        <span>English</span>
                                        <MdOutlineKeyboardArrowRight tw='w-5 h-5' />
                                        <span>French</span>
                                    </div>

                                    <div tw='flex gap-x-3 items-center'>
                                        <AiOutlineStar tw='w-5 h-5' />
                                        <BsThreeDotsVertical tw='w-5 h-5 text-gray-400' />
                                    </div>
                                </div>

                                <div tw='flex flex-col gap-y-2 font-medium'>
                                    <span>oaskdoas aosdkosakdo ask</span>

                                    <span tw='w-full h-px bg-gray-200' />

                                    <span tw='text-gray-400'>
                                        oaskdoas aossok doas kdok asodk oasdk oaks odk
                                    </span>
                                </div>
                            </div>
                            <div tw='bg-_light-gray p-4 rounded-xl flex flex-col gap-y-4'>
                                <div tw='flex justify-between'>
                                    <div tw='flex gap-x-2 items-center font-medium bg-_blue rounded-xl px-4 py-3'>
                                        <span>English</span>
                                        <MdOutlineKeyboardArrowRight tw='w-5 h-5' />
                                        <span>French</span>
                                    </div>

                                    <div tw='flex gap-x-3 items-center'>
                                        <AiOutlineStar tw='w-5 h-5' />
                                        <BsThreeDotsVertical tw='w-5 h-5 text-gray-400' />
                                    </div>
                                </div>

                                <div tw='flex flex-col gap-y-2 font-medium'>
                                    <span>oaskdoas aosdkosakdo ask</span>

                                    <span tw='w-full h-px bg-gray-200' />

                                    <span tw='text-gray-400'>
                                        oaskdoas aossok doas kdok asodk oasdk oaks odk
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div tw='space-y-2'>
                            <div tw='bg-_light-gray p-4 rounded-xl flex flex-col gap-y-4'>
                                <div tw='flex justify-between'>
                                    <div tw='flex gap-x-2 items-center font-medium bg-_blue rounded-xl px-4 py-3'>
                                        <span>English</span>
                                        <MdOutlineKeyboardArrowRight tw='w-5 h-5' />
                                        <span>French</span>
                                    </div>

                                    <div tw='flex gap-x-3 items-center'>
                                        <AiOutlineStar tw='w-5 h-5' />
                                        <BsThreeDotsVertical tw='w-5 h-5 text-gray-400' />
                                    </div>
                                </div>

                                <div tw='flex flex-col gap-y-2 font-medium'>
                                    <span>oaskdoas aosdkosakdo ask</span>

                                    <span tw='w-full h-px bg-gray-200' />

                                    <span tw='text-gray-400'>
                                        oaskdoas aossok doas kdok asodk oasdk oaks odk
                                    </span>
                                </div>
                            </div>
                            <div tw='bg-_light-gray p-4 rounded-xl flex flex-col gap-y-4'>
                                <div tw='flex justify-between'>
                                    <div tw='flex gap-x-2 items-center font-medium bg-_blue rounded-xl px-4 py-3'>
                                        <span>English</span>
                                        <MdOutlineKeyboardArrowRight tw='w-5 h-5' />
                                        <span>French</span>
                                    </div>

                                    <div tw='flex gap-x-3 items-center'>
                                        <AiOutlineStar tw='w-5 h-5' />
                                        <BsThreeDotsVertical tw='w-5 h-5 text-gray-400' />
                                    </div>
                                </div>

                                <div tw='flex flex-col gap-y-2 font-medium'>
                                    <span>oaskdoas aosdkosakdo ask</span>

                                    <span tw='w-full h-px bg-gray-200' />

                                    <span tw='text-gray-400'>
                                        oaskdoas aossok doas kdok asodk oasdk oaks odkasd asd asd asdasdad sadasd asdasdas dasd a
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
