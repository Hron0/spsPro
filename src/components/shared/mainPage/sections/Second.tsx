// @flow
import * as React from 'react';
import Image from "next/image";

type Props = {};
export const Second = (props: Props) => {
    return (
        <section className="mx-auto w-full bg-background relative grid grid-cols-2 items-start gap-12 px-24 py-12">
            <Image src={"/img/mainPage/img1.png"}
                   alt={'Pic'}
                   width={578}
                   height={334}/>

            <div className={"relative flex items-start justify-start h-full pl-20"}>

                <h3 className={"text-black text-2xl font-light"}>Мы профессионально выполняем свою работу и с
                    уверенностью можем отстоять свою
                    экспертную позицию в суде!
                    Кроме того, мы готовы представлять ваши интересы в суде в качестве
                    представителей или стать вашим консультантом при подготовке к процессу.</h3>

                <Image src={"/img/mainPage/rectangle.png"}
                       alt={'Pic'}
                       fill={true}
                       className={"left-1/4"}/>
            </div>

        </section>
    );
};