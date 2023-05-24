import { WorkCompornent } from "./WorkComponent";

export function Works(){
    return(
    <div className="flex justify-center">
        <div className="flex flex-col">
            <div className=" text-3xl self-center mb-10 mt-20 text-primary-content z-10">Works</div>
            <div id="worksElement" className="grid md:grid-cols-2 grid-cols-1 gap-20">
                <WorkCompornent
                href="https://image-bbs-for-next-js-z95c.vercel.app/"
                image="./imageBBS.png"
                title="Next.js画像掲示板"
                description={`React、Next.jsの習得のために作った画像掲示板です。\n身近なものを再現、より便利にを目指して制作しました。`}
                source="https://github.com/toriniku-yuma/imageBBS_for_Next.js"/>
                <WorkCompornent
                href="https://youtu.be/-a0HB9MLrzs"
                image="./Comment.jpg"
                title="Reactコメントジェネレータ"
                description={`HTML5コメントジェネレータというライブ配信支援ツールをリスペクトし、改良したものをReactを用いて作成しました\nWebSocketでコメントを受け取っているので、それを利用してこれ以外の支援ツールにも応用可能となっています`}
                source="https://github.com/toriniku-yuma/OBSCommentBalloon"/>
                <WorkCompornent
                href="https://rustmap.vercel.app/"
                image="./rustmap.png"
                title="ゲームサーバー向け観光マップ"
                description={`私が短期開催していたゲームサーバーの建築物をより見て回りやすくするために作ったNext.js製の観光マップです。\n開催中に用意しなくてはならなかったこともあり、しっかりと運用できるものを1週間で作るために頑張りました。`}
                source="https://github.com/toriniku-yuma/rustmap"/>
            </div>
        </div>
    </div>
    )
}
export default Works;