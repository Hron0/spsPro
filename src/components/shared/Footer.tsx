import React from 'react';

function Footer() {
    return (
        <section
            className="mx-auto w-full bg-[#545454] relative flex flex-row items-start gap-20 text-white px-6 pt-6 pb-16">
            <h2 className={"text-start text-sm font-extralight w-1/3"}>
                141508,Московская область, г. Солнечногорск, мкр. Рекинцо-2, д.3 п.54
                <br/><br/>
                197101, г.Санкт-Петербург, ул.Чапаева, д.15 БЦ «Сенатор», 4 этаж, пом.423
            </h2>

            <h2 className={"text-center text-sm font-extralight break-words w-1/3"}>
                АНО «Межрегиональный центр независимых исследований, экспертиз и права «Лучшее решение»
                предлагает услуги по проведению внесудебных исследований, судебных экспертиз и
                рецензированию судебных экспертиз.
            </h2>

            <h2 className={"text-end text-sm font-extralight w-1/3"}>
                тел. +7-926-388-80-70(общий); <br/><br/>
                +7-991-037-43-17 - отдел финансово-экономической (бухгалтерской) экспертизы; <br/><br/>
                +7-905-481-20-82- отдел землеустройства, кадастра и мониторинга земель; <br/><br/>
                e-mail: anosudex-bestsolution@mail.ru
            </h2>
        </section>
    );
}

export default Footer;