'use strict'


var gCurrQuestIdx
var gNextId
var gQuests



function onInitGame() {
    gNextId = 1
    gQuests = createQuests()
    gCurrQuestIdx = 0
    renderQuest()

}

function renderQuest() {

    const currQuest = gQuests[gCurrQuestIdx]
    const questOpts = currQuest.opts
    const elImg = document.querySelector('img')
    elImg.src = `pics/${currQuest.id}.jpeg`
    var strHTML = ''
    for (var i = 0; i < questOpts.length; i++) {
        strHTML += `<button class="answer" onclick="onCheckAnswer(this,${i})">${questOpts[i]}</button>\n`

    }

    const elQuiz = document.querySelector('.quiz')
    elQuiz.innerHTML = strHTML

}

function onCheckAnswer(elAnswer, answerIdx) {
    const rightAnswer = gQuests[gCurrQuestIdx].correctOptIndex
    if (rightAnswer !== answerIdx) {
        elAnswer.style.backgroundColor = 'red'
        return

    }
    // elAnswer.style.backgroundColor = 'green'
    if (gCurrQuestIdx >= gQuests.length - 1) {
        finishGame()
        return

    }
    gCurrQuestIdx++
    renderQuest()

}

function finishGame() {
    const elQuiz = document.querySelector('.quiz')
    elQuiz.innerHTML = `Victorious! <div><button onclick="onInitGame()">Restart</button></div>`

}

function createQuests() {
    const quest1 = { id: gNextId++, opts: ['That\'s Brad Pitt', 'Tom Cruise, for sure!'], correctOptIndex: 1 }
    const quest2 = { id: gNextId++, opts: ['George Clooney', 'Leonardo DiCaprio'], correctOptIndex: 1 }
    const quest3 = { id: gNextId++, opts: ['It\'s that one from Aladdin', 'He played in Mulan, isn\'t he?'], correctOptIndex: 0 }
    return [quest1, quest2, quest3]

}