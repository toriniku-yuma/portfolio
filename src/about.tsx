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
                            <progress className="progress progress-primary md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="70" max="100"></progress>
                            <span className=" ml-4 absolute right-5">70%</span>
                        </div>
                        <div className=" font-bold text-primary text-lg flex items-center mb-2">
                            <progress className="progress progress-primary md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="50" max="100"></progress>
                            <span className=" mr-4">Typescript</span>
                            <span className=" ml-4 absolute right-5">50%</span>
                        </div>
                        <div className=" font-bold text-primary text-lg flex items-center mb-2">
                            <progress className="progress progress-primary md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="50" max="100"></progress>
                            <span className=" mr-4">Python</span>
                            <span className=" ml-4 absolute right-5">50%</span>
                        </div>
                        <div className=" font-bold text-primary text-lg flex items-center mb-2">
                            <progress className="progress progress-primary md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="50" max="100"></progress>
                            <span className=" mr-4">Lua</span>
                            <span className=" ml-4 absolute right-5">50%</span>
                        </div>
                        <div className=" font-bold text-primary text-lg flex items-center mb-2">
                            <progress className="progress progress-primary md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="30" max="100"></progress>
                            <span className=" mr-4">C#</span>
                            <span className=" ml-4 absolute right-5">30%</span>
                        </div>
                        <div className=" font-bold text-secondary text-lg flex items-center mb-2">
                            <progress className="progress progress-secondary md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="40" max="100"></progress>
                            <span className=" mr-4">React</span>
                            <span className=" ml-4 absolute right-5">40%</span>
                        </div>
                        <div className=" font-bold text-secondary text-lg flex items-center mb-2">
                            <progress className="progress progress-secondary md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="30" max="100"></progress>
                            <span className=" mr-4">Next.js</span>
                            <span className=" ml-4 absolute right-5">30%</span>
                        </div>
                        <div className=" font-bold text-secondary text-lg flex items-center mb-2">
                            <progress className="progress progress-secondary md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="50" max="100"></progress>
                            <span className=" mr-4">Three.js</span>
                            <span className=" ml-4 absolute right-5">50%</span>
                        </div>
                        <div className=" font-bold text-secondary text-lg flex items-center mb-2">
                            <progress className="progress progress-secondary md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="30" max="100"></progress>
                            <span className=" mr-4">.NET Framework</span>
                            <span className=" ml-4 absolute right-5">30%</span>
                        </div>
                        <div className=" font-bold text-secondary text-lg flex items-center mb-2">
                            <progress className="progress progress-secondary md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="50" max="100"></progress>
                            <span className=" mr-4">VCI (VR)</span>
                            <span className=" ml-4 absolute right-5">50%</span>
                        </div>
                        <div className=" font-bold text-accent text-lg flex items-center mb-2">
                            <progress className="progress progress-accent md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="60" max="100"></progress>
                            <span className=" mr-4">TailwindCSS</span>
                            <span className=" ml-4 absolute right-5">60%</span>
                        </div>
                        <div className=" font-bold text-accent text-lg flex items-center mb-2">
                            <progress className="progress progress-accent md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="50" max="100"></progress>
                            <span className=" mr-4">GSAP 3</span>
                            <span className=" ml-4 absolute right-5">50%</span>
                        </div>
                        <div className=" font-bold text-accent text-lg flex items-center mb-2">
                            <progress className="progress progress-accent md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="20" max="100"></progress>
                            <span className=" mr-4">Framer-Motion</span>
                            <span className=" ml-4 absolute right-5">20%</span>
                        </div>
                        <div className=" font-bold text-accent text-lg flex items-center mb-2">
                            <progress className="progress progress-accent md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="60" max="100"></progress>
                            <span className=" mr-4">WebSocket</span>
                            <span className=" ml-4 absolute right-5">60%</span>
                        </div>
                        <div className=" font-bold text-accent text-lg flex items-center mb-2">
                            <progress className="progress progress-accent md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="30" max="100"></progress>
                            <span className=" mr-4">Prisma</span>
                            <span className=" ml-4 absolute right-5">30%</span>
                        </div>
                        <div className=" font-bold text-accent text-lg flex items-center mb-2">
                            <progress className="progress progress-accent md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="20" max="100"></progress>
                            <span className=" mr-4">supabase</span>
                            <span className=" ml-4 absolute right-5">20%</span>
                        </div>
                        <div className=" font-bold text-accent text-lg flex items-center mb-2">
                            <progress className="progress progress-accent md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="40" max="100"></progress>
                            <span className=" mr-4">Vercel</span>
                            <span className=" ml-4 absolute right-5">40%</span>
                        </div>
                        <div className=" font-bold text-info text-lg flex items-center mb-2">
                            <progress className="progress progress-info md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="70" max="100"></progress>
                            <span className=" mr-4">VSCode</span>
                            <span className=" ml-4 absolute right-5">70%</span>
                        </div>
                        <div className=" font-bold text-info text-lg flex items-center mb-2">
                            <progress className="progress progress-info md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="30" max="100"></progress>
                            <span className=" mr-4">Visual Studio</span>
                            <span className=" ml-4 absolute right-5">30%</span>
                        </div>
                        <div className=" font-bold text-info text-lg flex items-center mb-2">
                            <progress className="progress progress-info md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="50" max="100"></progress>
                            <span className=" mr-4">GitHub</span>
                            <span className=" ml-4 absolute right-5">50%</span>
                        </div>
                        <div className=" font-extrabold text-error text-lg flex items-center my-8">
                            <progress className="progress progress-error lg:w-[100%] md:w-[60%] w-[40%] h-4 absolute left-[190px]" value="100" max="100"></progress>
                            <span className=" mr-4">！VRへの情熱！</span>
                            <span className=" ml-4 absolute right-5"></span>
                        </div>
                    </div>
                </div>
                <div className=" mt-6">
                    <div className=" mb-4"><span className=" font-bold">将来の夢</span>:</div>
                    <div>私は、2018年の春にバーチャルキャストの体験会を通してVRやメタバース空間の楽しさを知り、</div>
                    <div>そこからVRに没頭するようになりました。</div>
                    <div>当時、お金に余裕のなかった中で、それでもあの魅力に取り憑かれた私は</div>
                    <div className=" mb-4">貯蓄を切り崩してOculus Rift CV1を購入し、VRの世界へと入っていきました。</div>
                    <div>それからの生活は劇的なものでした。</div>
                    <div>毎日仮想空間に入っては、そこで様々な人達と出会い、体験をしていく。</div>
                    <div>その傍ら、VRに対しもっと知りたい！知見を深めたい！という思いが強くなっていき、</div>
                    <div>VRメディアを毎日眺めたり、Meta社の年次カンファレンスである「Meta Connect」には、</div>
                    <div>時差の関係で真夜中にやっているにも関わらず、毎回リアルタイムで視聴し、</div>
                    <div>VRの歴史の変わっていく瞬間を目の当たりにしていきました。</div>
                    <div>また、Oculus Questの登場でスタンドアロンVRが注目された際には、</div>
                    <div>非エンジニアながらスタンドアロンVRの勉強会に参加させて頂き、より知見を深めるきっかけを</div>
                    <div>頂くことが出来ました。</div>
                    <div className=" mt-4">そうした興味や関心は、いずれ実際にVRで活躍するエンジニアという方向へ変わっていき、</div>
                    <div>ITエンジニアを志し、そのための学びを深めるきっかけへとなりました。</div>
                    <div>特にWebGPUが注目される中、WebXR分野がこれから成長していくと考え、</div>
                    <div>Webフロントエンドの学習を始めました。</div>
                    <div className=" mt-4">そんな私の今の将来の夢は、</div>
                    <div className=" font-bold">・WebXRを活用した、アニメーションビューワサービスを開発すること</div>
                    <div className=" font-bold">・VRを活用した、低遅延な配信プラットフォームを開発すること</div>
                    <div className=" font-bold">・それらを事業として展開する会社を設立すること</div>
                    <div>です。</div>
                    <div className=" mt-4">現在、3DのアニメーションをVRで閲覧する方法として、360°動画がよく見受けられますが、</div>
                    <div>せっかくその世界に入り込んで色んな視点からコンテンツを視聴することが出来るという</div>
                    <div>VRならではの特徴があるにも関わらず、360°動画では頭の角度を変えることしか出来ない、</div>
                    <div>という部分に勿体なさを感じ、その勿体なさをどうにかするためには、</div>
                    <div>リアルタイムレンダリングで自由度の高いコンテンツを作ることが出来るサービスを</div>
                    <div>自分で作るしか無い！と考えています。</div>
                    <div>また、それを活用することで、VTuber的な3Dキャラクターを使ったライブ配信に</div>
                    <div>低遅延かつ、自由な視点から見ることが出来たり、インタラクティブな要素を持たせられる</div>
                    <div>配信プラットフォームを実現することも可能なのではないか？と考えています。</div>
                    <div className=" mt-4">そんな私の夢を実現すべく、日々勉強に励む毎日です。</div>
                    <div>どうかこの私の夢を是非とも応援してください！</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About