export let pages = {
    game:
        `<section id="game" class="game">
            <div id="gameFieldSubstrate"></div>
            <div class="game-time">
                <div id="minutes">00</div>
                :
                <div id="seconds">00</div>
            </div>
            <div class="game-field">
                <div class="game-field__container" id="gameContainer_1">
                    <div class="game-field__container-image" id="gameImage_1"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover1"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover1"></div>
                    <img src="../assets/icons/cross.png" alt="" id="fail1" class="failHide gameImageStateIcon" />
                    <img src="../assets/icons/check.png" alt="" id="succes1" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_1" src="../assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_2">
                    <div class="game-field__container-image" id="gameImage_2"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover2"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover2"></div>
                    <img src="../assets/icons/cross.png" alt="" id="fail2" class="failHide gameImageStateIcon" />
                    <img src="../assets/icons/check.png" alt="" id="succes2" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_2" src="../assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_3">
                    <div class="game-field__container-image" id="gameImage_3"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover3"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover3"></div>
                    <img src="../assets/icons/cross.png" alt="" id="fail3" class="failHide gameImageStateIcon" />
                    <img src="../assets/icons/check.png" alt="" id="succes3" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_3" src="../assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_4">
                    <div class="game-field__container-image" id="gameImage_4"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover4"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover4"></div>
                    <img src="../assets/icons/cross.png" alt="" id="fail4" class="failHide gameImageStateIcon" />
                    <img src="../assets/icons/check.png" alt="" id="succes4" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_4" src="../assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_5">
                    <div class="game-field__container-image" id="gameImage_5"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover5"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover5"></div>
                    <img src="../assets/icons/cross.png" alt="" id="fail5" class="failHide gameImageStateIcon" />
                    <img src="../assets/icons/check.png" alt="" id="succes5" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_5" src="../assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_6">
                    <div class="game-field__container-image" id="gameImage_6"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover6"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover6"></div>
                    <img src="../assets/icons/cross.png" alt="" id="fail6" class="failHide gameImageStateIcon" />
                    <img src="../assets/icons/check.png" alt="" id="succes6" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_6" src="../assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_7">
                    <div class="game-field__container-image" id="gameImage_7"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover7"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover7"></div>
                    <img src="../assets/icons/cross.png" alt="" id="fail7" class="failHide gameImageStateIcon" />
                    <img src="../assets/icons/check.png" alt="" id="succes7" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_7" src="../assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_8">
                    <div class="game-field__container-image" id="gameImage_8"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover8"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover8"></div>
                    <img src="../assets/icons/cross.png" alt="" id="fail8" class="failHide gameImageStateIcon" />
                    <img src="../assets/icons/check.png" alt="" id="succes8" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_8" src="../assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_9">
                    <div class="game-field__container-image" id="gameImage_9"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover9"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover9"></div>
                    <img src="../assets/icons/cross.png" alt="" id="fail9" class="failHide gameImageStateIcon" />
                    <img src="../assets/icons/check.png" alt="" id="succes9" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_9" src="../assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_10">
                    <div class="game-field__container-image" id="gameImage_10"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover10"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover10"></div>
                    <img src="../assets/icons/cross.png" alt="" id="fail10" class="failHide gameImageStateIcon" />
                    <img src="../assets/icons/check.png" alt="" id="succes10" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_10" src="../assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_11">
                    <div class="game-field__container-image" id="gameImage_11"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover11"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover11"></div>
                    <img src="../assets/icons/cross.png" alt="" id="fail11" class="failHide gameImageStateIcon" />
                    <img src="../assets/icons/check.png" alt="" id="succes11" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_11" src="../assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_12">
                    <div class="game-field__container-image" id="gameImage_12"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover12"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover12"></div>
                    <img src="../assets/icons/cross.png" alt="" id="fail12" class="failHide gameImageStateIcon" />
                    <img src="../assets/icons/check.png" alt="" id="succes12" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_12" src="../assets/images/card-top.png" />
                </div>
            </div>
        </section>`
}