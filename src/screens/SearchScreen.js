import React from 'react';
import '../styles/SearchScreen.css';
function SearchScreen() {
    return (
        <section className={"search-screen d-flex flex-column align-items-center justify-content-center w-100 h-auto"}>
            <div
                className="search-container d-flex flex-column align-items-start justify-content-center p-5 w-100 h-100 gap-5">
                <h1 className={"search-title fs-3"}>Результаты поиска “Создание сайта”</h1>
                <div
                    className="search-content d-flex flex-column align-items-start justify-content-center p-4 gap-2 w-100">
                    <h1 className={"fs-4"}>Как писать код быстро и безболезненно?</h1>
                    <p className={"text-start fw-light"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Elementum volutpat orci turpis urna. Et
                        vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu
                        egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas
                        ornare vel volutpat.</p>
                    <div className={"d-flex flex-row align-items-center justify-content-between w-100"}>
                        <div className={"d-flex flex-row align-items-center justify-content-center gap-3"}>
                            <p className={"content-date"}>21.06.2020</p>
                            <p>●</p>
                            <p className={"content-tag"}>создание сайтов</p>
                        </div>
                        <a href="#" className={"text-decoration-none"}>перейти</a>
                    </div>
                </div>

                <div
                    className="search-content d-flex flex-column align-items-start justify-content-center p-4 gap-2 w-100">
                    <h1 className={"fs-4"}>Как писать код быстро и безболезненно?</h1>
                    <div className={"d-flex flex-row align-items-center justify-content-between w-100"}>
                        <div className={"d-flex flex-row align-items-center justify-content-center gap-3"}>
                            <p className={"content-date"}>21.06.2020</p>
                            <p>●</p>
                            <p className={"content-tag"}>продвижение видео</p>
                        </div>
                        <a href="#" className={"text-decoration-none"}>перейти</a>
                    </div>
                </div>

                <div
                    className="search-content d-flex flex-column align-items-start justify-content-center p-4 gap-2 w-100">
                    <h1 className={"fs-4"}>Как писать код быстро и безболезненно?</h1>
                    <p className={"text-start fw-light"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Elementum volutpat orci turpis urna. Et
                        vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu
                        egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas
                        ornare vel volutpat.</p>
                    <div className={"d-flex flex-row align-items-center justify-content-between w-100"}>
                        <div className={"d-flex flex-row align-items-center justify-content-center gap-3"}>
                            <p className={"content-date"}>21.06.2020</p>
                            <p>●</p>
                            <p className={"content-tag"}>создание сайтов</p>
                        </div>
                        <a href="#" className={"text-decoration-none"}>перейти</a>
                    </div>
                </div>

                <div
                    className="search-content d-flex flex-column align-items-start justify-content-center p-4 gap-2 w-100">
                    <h1 className={"fs-4"}>Как писать код быстро и безболезненно?</h1>
                    <div className={"d-flex flex-row align-items-center justify-content-between w-100"}>
                        <div className={"d-flex flex-row align-items-center justify-content-center gap-3"}>
                            <p className={"content-date"}>21.06.2020</p>
                            <p>●</p>
                            <p className={"content-tag"}>продвижение видео</p>
                        </div>
                        <a href="#" className={"text-decoration-none"}>перейти</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SearchScreen;