'use server'
import * as React from 'react';
import Image from "next/image";

export const Second = () => {
    return (
        <section className="mx-auto w-full relative grid lg:grid-cols-2 items-start gap-12 lg:px-24 py-12">
            <Image src={"/img/mainPage/img1.png"}
                   alt={'Pic'}
                   width={578}
                   height={334}
                   className={"hidden lg:block"}/>

            <div className={"relative flex items-start justify-start h-full lg:pl-20 bg-romb bg-contain bg-center bg-repeat-x"}>

                <h3 className={"text-black text-2xl font-light bg-repeat-x text-center px-24 sm:px-36 lg:px-0"}>Мы профессионально выполняем свою работу и с
                    уверенностью можем отстоять свою
                    экспертную позицию в суде!
                    Кроме того, мы готовы представлять ваши интересы в суде в качестве
                    представителей или стать вашим консультантом при подготовке к процессу.</h3>
            </div>

        </section>
    );
};