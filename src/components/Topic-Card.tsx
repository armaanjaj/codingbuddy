import Image from "next/image";
import React from "react";

function TopicCard() {
    return (
        <div className="inline-block p-4 max-w-[35rem]">
            <Image
                src={"/vercel.svg"}
                alt={"Course image"}
                width={100}
                height={100}
                className={
                    "border-2 border-black border-solid rounded-[10px] relative w-full p-4"
                }
            />
            <div>
                <h2 className="font-bold text-[1.8rem] whitespace-pre-line">
                    This will be the title for topic
                </h2>
                <div>
                    <span className="font-light text-[14px]">Jan 20, 2010</span>
                    &nbsp;Thiswill bethe tagsrelated totopic...
                </div>
                <div className="flex flex-row justify-evenly items-center relative w-[80%]">
                    <div className="rounded-[5px] bg-slate-400 inline p-1">This</div>
                    <div className="rounded-[5px] bg-slate-400 inline p-1">will</div>
                    <div className="rounded-[5px] bg-slate-400 inline p-1">be</div>
                    <div className="rounded-[5px] bg-slate-400 inline p-1">the</div>
                    <div className="rounded-[5px] bg-slate-400 inline p-1">tags</div>
                </div>
                <div>
                    <span className="font-bold text-[1rem] text-slate-600">
                        Author Singh
                    </span>
                    &nbsp;<span className="text-[0.9rem]">2 mins read</span>
                </div>
            </div>
        </div>
    );
}

export default TopicCard;
