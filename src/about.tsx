export function About(){
    return(
        <div className='flex justify-center'>
        <div className=' relative'>
            <div className=' bg-base-100 first-line flex flex-col p-10 shadow-md'>
                <div className=" flex flex-col items-center"><div className=" m-1 text-3xl">About</div></div>
                <div className=" flex">
                    <div className="avatar mx-10">
                        <div className=" w-44 h-44 rounded-full">
                            <img src="./avater.png" />
                        </div>
                    </div>
                    <div className=" m-1 mx-2">
                        <div className=" mt-4"><span className=" font-bold">名前</span>:kawakami</div>
                        <div className=" mt-4"><span className=" font-bold">趣味</span>:VR、Twitch配信視聴</div>
                        <div className=" mt-4">
                            <div><span className=" font-bold">興味、関心</span>:</div>
                            <div>VR情報全般（VR系テックメディアなどのチェック）</div>
                            <div>映像ライブ配信プロトコルや関連技術など</div>
                        </div>
                        <div className=" mt-4">
                            <div><span className=" font-bold">Link</span>:</div>
                            <div><svg className=" inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
                            <a className=" mx-2" href="https://github.com/toriniku-yuma" target="_blank" rel="noopener noreferrer">GitHub</a></div>
                            <div><img src="./zenn.svg" className=" w-5 inline-block"/>
                            <a className=" mx-2" href="https://zenn.dev/habayuma" target="_blank" rel="noopener noreferrer">Zenn</a></div>
                        </div>
                    </div>
                </div>
                <div className=" mt-10">
                    <div><span className=" font-bold">所有スキル</span>:</div>
                    <div className=" flex flex-col">
                        <div className=" font-bold text-primary text-lg flex items-center mb-2 mt-4">
                            <span className=" mr-4">Javascript</span>
                            <progress className="progress progress-primary w-[60%] h-4 absolute left-[190px]" value="70" max="100"></progress>
                            <span className=" ml-4 absolute right-5">70%</span>
                        </div>
                        <div className=" font-bold text-primary text-lg flex items-center mb-2">
                            <progress className="progress progress-primary w-[60%] h-4 absolute left-[190px]" value="50" max="100"></progress>
                            <span className=" mr-4">Typescript</span>
                            <span className=" ml-4 absolute right-5">50%</span>
                        </div>
                        <div className=" font-bold text-primary text-lg flex items-center mb-2">
                            <progress className="progress progress-primary w-[60%] h-4 absolute left-[190px]" value="50" max="100"></progress>
                            <span className=" mr-4">Python</span>
                            <span className=" ml-4 absolute right-5">50%</span>
                        </div>
                        <div className=" font-bold text-primary text-lg flex items-center mb-2">
                            <progress className="progress progress-primary w-[60%] h-4 absolute left-[190px]" value="50" max="100"></progress>
                            <span className=" mr-4">Lua</span>
                            <span className=" ml-4 absolute right-5">50%</span>
                        </div>
                        <div className=" font-bold text-primary text-lg flex items-center mb-2">
                            <progress className="progress progress-primary w-[60%] h-4 absolute left-[190px]" value="30" max="100"></progress>
                            <span className=" mr-4">C#</span>
                            <span className=" ml-4 absolute right-5">30%</span>
                        </div>
                        <div className=" font-bold text-secondary text-lg flex items-center mb-2">
                            <progress className="progress progress-secondary w-[60%] h-4 absolute left-[190px]" value="40" max="100"></progress>
                            <span className=" mr-4">React</span>
                            <span className=" ml-4 absolute right-5">40%</span>
                        </div>
                        <div className=" font-bold text-secondary text-lg flex items-center mb-2">
                            <progress className="progress progress-secondary w-[60%] h-4 absolute left-[190px]" value="30" max="100"></progress>
                            <span className=" mr-4">Next.js</span>
                            <span className=" ml-4 absolute right-5">30%</span>
                        </div>
                        <div className=" font-bold text-secondary text-lg flex items-center mb-2">
                            <progress className="progress progress-secondary w-[60%] h-4 absolute left-[190px]" value="50" max="100"></progress>
                            <span className=" mr-4">Three.js</span>
                            <span className=" ml-4 absolute right-5">50%</span>
                        </div>
                        <div className=" font-bold text-secondary text-lg flex items-center mb-2">
                            <progress className="progress progress-secondary w-[60%] h-4 absolute left-[190px]" value="30" max="100"></progress>
                            <span className=" mr-4">.NET Framework</span>
                            <span className=" ml-4 absolute right-5">30%</span>
                        </div>
                        <div className=" font-bold text-secondary text-lg flex items-center mb-2">
                            <progress className="progress progress-secondary w-[60%] h-4 absolute left-[190px]" value="50" max="100"></progress>
                            <span className=" mr-4">VCI (VR)</span>
                            <span className=" ml-4 absolute right-5">50%</span>
                        </div>
                        <div className=" font-bold text-accent text-lg flex items-center mb-2">
                            <progress className="progress progress-accent w-[60%] h-4 absolute left-[190px]" value="60" max="100"></progress>
                            <span className=" mr-4">TailwindCSS</span>
                            <span className=" ml-4 absolute right-5">60%</span>
                        </div>
                        <div className=" font-bold text-accent text-lg flex items-center mb-2">
                            <progress className="progress progress-accent w-[60%] h-4 absolute left-[190px]" value="50" max="100"></progress>
                            <span className=" mr-4">GSAP 3</span>
                            <span className=" ml-4 absolute right-5">50%</span>
                        </div>
                        <div className=" font-bold text-accent text-lg flex items-center mb-2">
                            <progress className="progress progress-accent w-[60%] h-4 absolute left-[190px]" value="20" max="100"></progress>
                            <span className=" mr-4">Framer-Motion</span>
                            <span className=" ml-4 absolute right-5">20%</span>
                        </div>
                        <div className=" font-bold text-accent text-lg flex items-center mb-2">
                            <progress className="progress progress-accent w-[60%] h-4 absolute left-[190px]" value="60" max="100"></progress>
                            <span className=" mr-4">WebSocket</span>
                            <span className=" ml-4 absolute right-5">60%</span>
                        </div>
                        <div className=" font-bold text-accent text-lg flex items-center mb-2">
                            <progress className="progress progress-accent w-[60%] h-4 absolute left-[190px]" value="30" max="100"></progress>
                            <span className=" mr-4">Prisma</span>
                            <span className=" ml-4 absolute right-5">30%</span>
                        </div>
                        <div className=" font-bold text-accent text-lg flex items-center mb-2">
                            <progress className="progress progress-accent w-[60%] h-4 absolute left-[190px]" value="20" max="100"></progress>
                            <span className=" mr-4">supabase</span>
                            <span className=" ml-4 absolute right-5">20%</span>
                        </div>
                        <div className=" font-bold text-accent text-lg flex items-center mb-2">
                            <progress className="progress progress-accent w-[60%] h-4 absolute left-[190px]" value="40" max="100"></progress>
                            <span className=" mr-4">Vercel</span>
                            <span className=" ml-4 absolute right-5">40%</span>
                        </div>
                        <div className=" font-bold text-info text-lg flex items-center mb-2">
                            <progress className="progress progress-info w-[60%] h-4 absolute left-[190px]" value="70" max="100"></progress>
                            <span className=" mr-4">VSCode</span>
                            <span className=" ml-4 absolute right-5">70%</span>
                        </div>
                        <div className=" font-bold text-info text-lg flex items-center mb-2">
                            <progress className="progress progress-info w-[60%] h-4 absolute left-[190px]" value="30" max="100"></progress>
                            <span className=" mr-4">Visual Studio</span>
                            <span className=" ml-4 absolute right-5">30%</span>
                        </div>
                        <div className=" font-bold text-info text-lg flex items-center mb-2">
                            <progress className="progress progress-info w-[60%] h-4 absolute left-[190px]" value="50" max="100"></progress>
                            <span className=" mr-4">GitHub</span>
                            <span className=" ml-4 absolute right-5">50%</span>
                        </div>
                        <div className=" font-extrabold text-error text-lg flex items-center my-8">
                            <progress className="progress progress-error w-[100%] h-4 absolute left-[190px]" value="100" max="100"></progress>
                            <span className=" mr-4">！VRへの情熱！</span>
                            <span className=" ml-4 absolute right-5"></span>
                        </div>
                    </div>
                </div>
                <div className=" mt-2">
                    <div><span className=" font-bold">将来の夢</span>:</div>
                    <div>VRで見ることの出来るモーション共有プラットフォームの</div>
                    <div>開発、運営を行うこと</div>
                    <div>VRを活用した低遅延ライブ配信プラットフォームの</div>
                    <div>開発、運営を行うこと</div>
                    <div>それらの事業を扱う会社を設立すること</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About