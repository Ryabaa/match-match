export let pages = {
    game: `<section id="index" class="game">
            <div id="gameFieldSubstrate"></div>
            <div class="game-time">
                <div class="game-time__item" id="minutes">00</div>
                <div class="game-time__item">:</div>
                <div class="game-time__item" id="seconds">00</div>
            </div>
            <div class="game-field">
                <div class="game-field__container" id="gameContainer_1">
                    <div class="game-field__container-image img" id="gameImage_1"></div>
                    <div class="game-field__container-background img game-field__container-backgroundRed" id="failCover1"></div>
                    <div class="game-field__container-background img game-field__container-backgroundGreen" id="succesCover1"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail1" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes1" class="succesHide gameImageStateIcon" />
                    <img class="cardCover img" id="backsideCard_1" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_2">
                    <div class="game-field__container-image img" id="gameImage_2"></div>
                    <div class="game-field__container-background img game-field__container-backgroundRed" id="failCover2"></div>
                    <div class="game-field__container-background img game-field__container-backgroundGreen" id="succesCover2"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail2" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes2" class="succesHide gameImageStateIcon" />
                    <img class="cardCover img" id="backsideCard_2" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_3">
                    <div class="game-field__container-image img" id="gameImage_3"></div>
                    <div class="game-field__container-background img game-field__container-backgroundRed" id="failCover3"></div>
                    <div class="game-field__container-background img game-field__container-backgroundGreen" id="succesCover3"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail3" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes3" class="succesHide gameImageStateIcon" />
                    <img class="cardCover img" id="backsideCard_3" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_4">
                    <div class="game-field__container-image img" id="gameImage_4"></div>
                    <div class="game-field__container-background img game-field__container-backgroundRed" id="failCover4"></div>
                    <div class="game-field__container-background img game-field__container-backgroundGreen" id="succesCover4"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail4" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes4" class="succesHide gameImageStateIcon" />
                    <img class="cardCover img" id="backsideCard_4" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_5">
                    <div class="game-field__container-image img" id="gameImage_5"></div>
                    <div class="game-field__container-background img game-field__container-backgroundRed" id="failCover5"></div>
                    <div class="game-field__container-background img game-field__container-backgroundGreen" id="succesCover5"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail5" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes5" class="succesHide gameImageStateIcon" />
                    <img class="cardCover img" id="backsideCard_5" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_6">
                    <div class="game-field__container-image img" id="gameImage_6"></div>
                    <div class="game-field__container-background img game-field__container-backgroundRed" id="failCover6"></div>
                    <div class="game-field__container-background img game-field__container-backgroundGreen" id="succesCover6"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail6" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes6" class="succesHide gameImageStateIcon" />
                    <img class="cardCover img" id="backsideCard_6" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_7">
                    <div class="game-field__container-image img" id="gameImage_7"></div>
                    <div class="game-field__container-background img game-field__container-backgroundRed" id="failCover7"></div>
                    <div class="game-field__container-background img game-field__container-backgroundGreen" id="succesCover7"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail7" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes7" class="succesHide gameImageStateIcon" />
                    <img class="cardCover img" id="backsideCard_7" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_8">
                    <div class="game-field__container-image img" id="gameImage_8"></div>
                    <div class="game-field__container-background img game-field__container-backgroundRed" id="failCover8"></div>
                    <div class="game-field__container-background img game-field__container-backgroundGreen" id="succesCover8"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail8" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes8" class="succesHide gameImageStateIcon" />
                    <img class="cardCover img" id="backsideCard_8" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_9">
                    <div class="game-field__container-image img" id="gameImage_9"></div>
                    <div class="game-field__container-background img game-field__container-backgroundRed" id="failCover9"></div>
                    <div class="game-field__container-background img game-field__container-backgroundGreen" id="succesCover9"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail9" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes9" class="succesHide gameImageStateIcon" />
                    <img class="cardCover img" id="backsideCard_9" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_10">
                    <div class="game-field__container-image img" id="gameImage_10"></div>
                    <div class="game-field__container-background img game-field__container-backgroundRed" id="failCover10"></div>
                    <div class="game-field__container-background img game-field__container-backgroundGreen" id="succesCover10"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail10" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes10" class="succesHide gameImageStateIcon" />
                    <img class="cardCover img" id="backsideCard_10" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_11">
                    <div class="game-field__container-image img" id="gameImage_11"></div>
                    <div class="game-field__container-background img game-field__container-backgroundRed" id="failCover11"></div>
                    <div class="game-field__container-background img game-field__container-backgroundGreen" id="succesCover11"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail11" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes11" class="succesHide gameImageStateIcon" />
                    <img class="cardCover img" id="backsideCard_11" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_12">
                    <div class="game-field__container-image img" id="gameImage_12"></div>
                    <div class="game-field__container-background img game-field__container-backgroundRed" id="failCover12"></div>
                    <div class="game-field__container-background img game-field__container-backgroundGreen" id="succesCover12"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail12" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes12" class="succesHide gameImageStateIcon" />
                    <img class="cardCover img" id="backsideCard_12" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_13">
                    <div class="game-field__container-image img" id="gameImage_13"></div>
                    <div class="game-field__container-background img game-field__container-backgroundRed" id="failCover13"></div>
                    <div class="game-field__container-background img game-field__container-backgroundGreen" id="succesCover13"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail13" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes13" class="succesHide gameImageStateIcon" />
                    <img class="cardCover img" id="backsideCard_13" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_14">
                    <div class="game-field__container-image img" id="gameImage_14"></div>
                    <div class="game-field__container-background img game-field__container-backgroundRed" id="failCover14"></div>
                    <div class="game-field__container-background img game-field__container-backgroundGreen" id="succesCover14"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail14" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes14" class="succesHide gameImageStateIcon" />
                    <img class="cardCover img" id="backsideCard_14" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_15">
                    <div class="game-field__container-image img" id="gameImage_15"></div>
                    <div class="game-field__container-background img game-field__container-backgroundRed" id="failCover15"></div>
                    <div class="game-field__container-background img game-field__container-backgroundGreen" id="succesCover15"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail15" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes15" class="succesHide gameImageStateIcon" />
                    <img class="cardCover img" id="backsideCard_15" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_16">
                    <div class="game-field__container-image img" id="gameImage_16"></div>
                    <div class="game-field__container-background img game-field__container-backgroundRed" id="failCover16"></div>
                    <div class="game-field__container-background img game-field__container-backgroundGreen" id="succesCover16"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail16" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes16" class="succesHide gameImageStateIcon" />
                    <img class="cardCover img" id="backsideCard_16" src="./assets/images/card-top.png" />
                </div>
            </div>
        </section>`,
    about: `<section class="about">
                <h2 class="about-title">How to play?</h2>
                <div class="about-container about-container1">
                    <div class="about-container__number">1</div>
                    <h3 class="about-container__text">Register new player in game</h3>
                </div>
                <div class="about-container about-container2">
                    <div class="about-container__number">2</div>
                    <h3 class="about-container__text">Configure your game settings</h3>
                </div>
                <div class="about-container about-container3">
                    <div class="about-container__number">3</div>
                    <h3 class="about-container__text">Start you new game! Remember card positions and match it before times up.</h3>
                </div>
                <img src="./assets/images/about-img1.png" alt="" class="about-img about-img1" />
                <img src="./assets/images/about-img2.png" alt="" class="about-img about-img2" />
                <img src="./assets/images/about-img3.png" alt="" class="about-img about-img3" />
                </section>`,
    score: `<section class="score">
                <h2 class="score-title">Best players</h2>
                <div class="score-container">
                    <div class="score-card score-card__user" id="scoreCard1"></div>
                    <div class="score-card">
                        <img src="./assets/images/nicci.png" alt="" class="score-card__avatar" />
                        <div class="score-card__container">
                            <h3 class="score-card__name">Nicci Troiani</h3>
                            <p class="score-card__mail">nicci@gmail.com</p>
                        </div>
                        <p class="score-card__time">Score: <span class="score-card__span">79</span></p>
                    </div>
                    <div class="score-card score-card__user" id="scoreCard2"></div>
                    <div class="score-card">
                        <img src="./assets/images/george.png" alt="" class="score-card__avatar" />
                        <div class="score-card__container">
                            <h3 class="score-card__name">George Fields</h3>
                            <p class="score-card__mail">george.f@gmail.com</p>
                        </div>
                        <p class="score-card__time">Score: <span class="score-card__span">75</span></p>
                    </div>
                    <div class="score-card score-card__user" id="scoreCard3"></div>
                    <div class="score-card">
                        <img src="./assets/images/jones.png" alt="" class="score-card__avatar" />
                        <div class="score-card__container">
                            <h3 class="score-card__name">Jones Dermot</h3>
                            <p class="score-card__mail">dermot@gamil.com</p>
                        </div>
                        <p class="score-card__time">Score: <span class="score-card__span">70</span></p>
                    </div>
                    <div class="score-card score-card__user" id="scoreCard4"></div>
                    <div class="score-card">
                        <img src="./assets/images/jane.png" alt="" class="score-card__avatar" />
                        <div class="score-card__container">
                            <h3 class="score-card__name">Jane Doe</h3>
                            <p class="score-card__mail">jane.doe@gmail.com</p>
                        </div>
                        <p class="score-card__time">Score: <span class="score-card__span">67</span></p>
                    </div>
                    <div class="score-card score-card__user" id="scoreCard5"></div>
                </div>
            </section>`,
    settings: ` <section class="settings">
                    <div class="settings-container">
                        <h2 class="settings-container__title">Game cards</h2>
                        <label class="settings-container__text">Select game cards type: </label>
                        <button id="cardTypeBtn_animals" class="settings-container__btn">Animals</button>
                        <button id="cardTypeBtn_fruits" class="settings-container__btn">Fruits</button>
                    </div>
                    <div class="settings-container">
                        <h2 class="settings-container__title">Difficulty</h2>
                        <label class="settings-container__text">Select game difficulty: </label>
                        <button id="difficultBtn_easy" class="settings-container__btn">Easy (4x3)</button>
                        <button id="difficultBtn_medium" class="settings-container__btn">Medium (4x4)</button>
                    </div>
                </section>`,
};
