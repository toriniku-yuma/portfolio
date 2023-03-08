export function About(){
    return(
        <div className='flex justify-center'>
        <div className=' relative'>
            <img className=' w-[60rem] right-40 relative' src='./VRChat.png'/>
            <div className='bg-base-200 absolute right-10 top-40 flex flex-col items-center'>
                <div><div>about</div></div>
                <div className=" flex">
                    <div className=" m-1 mx-2">
                        <div>名前:kawakami</div>
                        <div>趣味:VR、Twitch配信視聴</div>
                        <div>所有スキル:</div>
                        <div>React、Next.js</div>
                    </div>
                    <div className="m-1 mx-2">
                        <div>将来の夢</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About