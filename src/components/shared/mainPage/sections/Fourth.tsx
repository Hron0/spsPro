import React from 'react';
import Image from "next/image";

function Fourth() {
    return (
        <section
            className="mx-auto w-full relative flex flex-row justify-center gap-2">
            <div className={"relative flex items-start justify-start bg-romb bg-contain bg-repeat-y"}>
                <ul className={"text-black text-3xl font-light px-6 lg:px-24 py-12 text-start"}>
                    <li>- Строительно-техническая экспертиза;</li>
                    <li>- Почерковедческая экспертиза;</li>
                    <li>- Техническая экспертиза документов;</li>
                    <li>- Пожарно-техническая экспертиза;</li>
                    <li>- Финансово-экономическая экспертиза;</li>
                    <li>- Бухгалтерская экспертиза;</li>
                    <li>- Товароведческая экспертиза;</li>
                    <li>- Лингвистическая экспертиза;</li>
                    <li>- Землеустроительная экспертиза;</li>
                    <li>- Рецензирование заключений экспертов.</li>
                </ul>

                <div className={"absolute w-[4px] h-[150px] bg-accent rounded-2xl right-0 top-12"}></div>

                {/*<Image src={"/img/mainPage/rectangle.png"}*/}
                {/*       alt={'Pic'}*/}
                {/*       fill={true}*/}
                {/*       className={"bg-cover"}/>*/}
            </div>

            <Image src={"/img/mainPage/img2.png"}
                   alt={'Pic'}
                   width={330}
                   height={434}
                   className={"py-11 px-10 mr-10 hidden lg:block"}/>


        </section>
    );
}

export default Fourth;